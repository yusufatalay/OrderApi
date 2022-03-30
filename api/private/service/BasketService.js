import db from '../../src/models';
import { validate_item } from '../validation/BasketValidation';

class BasketService {

	static async additem(request) {
		try {

			const item = {
				ownerid: request.userid,
				productid: request.body.productid,
				productamount: request.body.productamount

			};
			// validate added item
			const validated_item = validate_item(item);
			if (!validated_item.type) {
				return validated_item;
			}
			//	check if that item already exists in the basket
			const basketitem = await db.Baskets.findOne({
				where: {
					ownerid: item.ownerid,
					productid: item.productid
				},
				include: {
					model: db.Products
				}

			});

			if (basketitem) {
				/*
				 * the item already exists in the user's basket so just update the amount.
				 * check for negative amounts.
				 */
				const updatedbasket = await db.Baskets.update({
					productamount: item.productamount + basketitem.productamount
				},
					{
						where: {
							productid: basketitem.productid,
							ownerid: basketitem.ownerid
						}

					}
				);
				if (updatedbasket === 0) {
					return { message: 'Basket not updated', type: false };
				}
				basketitem.productamount += item.productamount;
				return { data: basketitem, message: 'Basket updated', type: true };
			}
			// user does not have that item in his/her basket so create a new record.
			const addeditem = await db.Baskets.create(item);
			return { data: addeditem, message: 'Item added', type: true };

		}
		catch (error) {
			throw (error);
		}
	}

	static async getbasket(request) {
		try {
			/*
			 * get user id from the request's token (request.userid) 
			 * get user's basket along with the products in it
			 * calculate the basket total
			 * create an orde object and return it
			 */

			const user = await db.Users.findOne({
				where: {
					id: request.userid
				}
			});
			if (!user) {
				return { message: 'User does not exist', type: false };
			}

			const userbasket = await db.Baskets.findAll({
				where: {
					ownerid: request.userid
				},
				include: {
					model: db.Products,
					attributes: []
				},
				attributes: [
					'id',
					'ownerid',
					'productid',
					'productamount',
					[db.Sequelize.col('Product.price'), 'unit_price']
				],
				// group: [ 'id', 'ownerid', 'productid', 'productamount' ]
				raw: true

			});

			if (!userbasket) {
				return { message: 'User does not have a basket', type: false };
			}


			let basket_total = userbasket.reduce((total, current) => {
				return total + (current.productamount * current.unit_price);

			}, 0);

			//  create an order instance
			return {

				data: {
					userid: request.userid,
					baskettotal: basket_total,
					items: userbasket
				},
				message: 'Order created',
				type: true

			};
		}
		catch (error) {
			throw error;
		}
	}

}

export default BasketService;