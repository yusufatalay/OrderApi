import db from "../../src/models";

class OrderService {
	static async createorder(request) {
		try {
			const user_id = request.userid;
			const user_basket = await db.Baskets.findAll({
				where: {
					ownerid: user_id
				}
			});

			// if user_basket is null then user has no item in his/her basket
			if (user_basket.length !== 0) {
				return { message: 'User basket does not exist', type: false };
			}
			// user's basket do exists then get required information from it.
			let basket_total = 0;

			user_basket.forEach(async (item) => {
				const product = await db.Products.findOne({
					where: {
						id: item.product_id
					}
				});

				basket_total += product.price;
			});

			return {
				data: {
					user_id: user_id,
					total_price: basket_total,
					status : 1
				},
				message : 'OK',
				type: true
			}

		}
		catch (error) {
			throw (error);
		}
	}

}
export default OrderService;