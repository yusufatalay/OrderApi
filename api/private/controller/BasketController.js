import BasketService from '../service/BasketService';
class BasketController {

	static async handleadditem(request, response) {

		const basketinfo = await BasketService.additem(request);

		response.json(basketinfo);

	}

	static async handlegetbasket(request, response) {
		const basketinfo = await BasketService.getbasket(request);
		response.json(basketinfo);
	}

}

export default BasketController;