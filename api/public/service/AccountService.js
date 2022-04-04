//static and async funcs
import db from '../../src/models';
import md5 from 'md5';
import { validate_register, validate_login } from '../validation/AccountValidation.js';
import Helpers from '../../utils/helpers';
class AccountService {



	static async register(req) {
		try {
			const user = {
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				password: md5(req.body.password)
			};
			// check if given user already exists in the database
			const dbuser = await db.Users.findOne({
				where: {
					email: user.email
				}
			});

			if (dbuser) {
				return { data: null, message: 'User already exists', type: false };
			}
			// validate the user's fields
			const validated_user = validate_register({
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				password: req.body.password
			});
			// check if there is an error
			if (!validated_user.type) {
				return { message: validated_user.message, type: validated_user.type };
			}
			const new_user = await db.Users.create(user);
			if (!new_user) {
				return { data: null, message: 'User cannot be created', type: false };
			}
			return { data: new_user, message: 'User created', type: true };

		}
		catch (error) {
			throw (error);
		}
	}

	static async login(req) {

		try {
			const userinfo = {
				email: req.body.email,
				password: md5(req.body.password)
			};

			// validate the input
			const validated_user = validate_login({
				email: req.body.email,
				password: req.body.password
			});
			// check if there is an erro while validating
			if (!validated_user.type) {
				return { message: validated_user.message, type: validated_user.type };
			}
			const existing_user = await db.Users.findOne({
				where: {
					email: userinfo.email,
					password: userinfo.password
				},
				attributes: {
					exclude: ['createdAt', 'updatedAt', 'password']
				}
			});
			if (!existing_user) {
				return {
					data: null,
					message: 'Email or password wrnong',
					type: false
				};
			}
			return {
				data: {
					token: Helpers.generateJWT(existing_user),
					user: existing_user
				},
				message: 'User found',
				type: true
			};

		}
		catch (error) {

			throw (error);
		}
	}

}

export default AccountService;