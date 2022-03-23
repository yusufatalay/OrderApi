//static and async funcs
import db from '../../src/models';
import md5 from 'md5';

class AccountService {

	static async register(req) {
		try {
			const user = {
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				password: md5(req.body.password)
			};
			const new_user = await db.Users.create(user);
			if (!new_user) {
				return false;
			}
			return new_user;

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

			const existing_user = await db.Users.findOne({
				where: {
					email: userinfo.email,
					password: userinfo.password
				},
				attributes: {
					exclude: ['createdAt', 'updatedAt', 'password']
				}
			});

			return existing_user;

		}
		catch (error) {

			throw (error);
		}
	}

}

export default AccountService;