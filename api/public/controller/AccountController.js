import AccountService from '../service/AccountService';
import 'http';

/**
 * @typedef new_user
 * @property  {string} first_name.required - user's first name.
 * @property  {string} last_name.required - user's last name.
 * @property  {string} email.required - user's email.
 * @property  {string} password.required - user's password.
 */

/**
 * @typedef existing_user
 * @property  {string} email.required - user's email.
 * @property  {string} password.required - user's password.
 */

class AccountController {

	/**
	 * @route POST /public/v1/account/register
	 * @group account - Operations about registering user
	 * @param {new_user.model} new_user.body.required 
	 * @produces application/json 
	 * @consumes application/json 
	 * @returns {object} success -  {data: new_user, message: 'User created', type: true}
	 * @returns {object} existing user -  {data: null, message: 'User already exists', type: false}
	 * @returns {object} validation error -  {data: null, message: validation error message, type: false}
	 * @returns {object}  database error -  {data: null, message: 'User cannot be created', type: false}
	 */

	static async handleregister(request, response) {
		const result = await AccountService.register(request);
		response.json(result);
	}


	/**
	 * @route POST /public/v1/account/login
	 * @group account - Operations about registering user
	 * @produces application/json 
	 * @consumes application/json  
	 * @param {existing_user.model} existing_user.body.required 
	 * @returns {object} success -  {data: new_user, message: 'User found', type: true}
	 * @returns {object} validation error -  {data: null, message: validation error message, type: false}
	 * @returns {object}  wrong credentials -  {data: null, message: 'Wrong email/password', type: false}
	 */
	static async handlelogin(request, response) {
		const result = await AccountService.login(request);
		response.json(result);
	}

}
export default AccountController;