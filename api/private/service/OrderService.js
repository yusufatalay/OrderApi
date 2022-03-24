import db from '../../src/models';

class OrderService {
	static async createorder(request) {
		try {
			/*
			 * get user id from the request's token (request.userid) 
			 * get user's basket along with the products in it
			 * calculate the basket total
			 * create an orde object and return it
			 */

			// check if user exists or not

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
					model: db.Products
				}
			});

			if (!userbasket) {
				return { message: 'User does not have a basket', type: false };
			}
			// calculate basket total
			let basket_total = 0;
			let userproducts = [];
			userbasket.forEach(basketinstance => {
				basket_total += basketinstance.Product.price;
				userproducts.push(basketinstance.Product.name);
			});

			//  create an order instance
			return {
				data: {
					userid: request.userid,
					baskettotal: basket_total,
					items: userproducts
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
export default OrderService;