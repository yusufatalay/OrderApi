import AccountService from '../service/AccountService';
import 'http';
import Helpers from '../../utils/helpers';

class AccountController {

	static async handleregister(request, response) {
		const isOkay = await AccountService.register(request);
		if (isOkay) {
			response.json({ message: 'OK', type: true });
		}
		else {
			response.json({ message: 'An error occurred', type: false });

		}
	}

	static async handlelogin(request, response) {
		const user = await AccountService.login(request);

		if (user) {
			response.json({
				message: 'User found',
				type: true,
				data: {
					token: Helpers.generateJWT(user),
					user: user
				}
			});
		}
		else {
			response.json({ message: 'User does not exists', type: false });
		}

	}

}

export default AccountController;