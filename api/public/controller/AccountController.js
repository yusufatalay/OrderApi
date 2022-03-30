import AccountService from '../service/AccountService';
import 'http';

class AccountController {

	static async handleregister(request, response) {
		const result = await AccountService.register(request);
		response.json(result);
	}

	static async handlelogin(request, response) {
		const result = await AccountService.login(request);
		response.json(result);

	}

}
export default AccountController;