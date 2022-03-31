import BasketService from '../service/BasketService';

/**
 * @typedef item
 * @property  {integer} productid.required 
 * @property  {integer} productid.required 
 * @property  {integer} productamount.required
 */
class BasketController {

	/**
	 * @route POST /private/v1/basket/addproduct
	 * @group basket - Operations about adding item to user's basket
	 * @param {item.model} item.body.required 
	 * @produces application/json 
	 * @consumes application/json 
	 * @returns {object} success -  {data: new_user, message: 'Item added', type: true}
	 * @returns {object} existing item -  {data: basketitem, message: 'Basket updated', type: false}
	 * @returns {object} validation error -  {data: null, message: validation error message, type: false}
	 * @returns {object}  database error -  {message: 'Basket not updated', type: false}
	 */
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