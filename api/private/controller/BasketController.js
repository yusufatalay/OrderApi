import BasketService from '../service/BasketService';
class BasketController {

	static async handleadditem(request, response) {

		const basketinfo = await BasketService.additem(request);

		response.json(basketinfo);

	}

}

export default BasketController;