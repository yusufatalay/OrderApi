import db from '../../src/models';
import BasketService from './BasketService';

class OrderService {

	static async createorder(request) {
		try {
			const userorder = await BasketService.getbasket(request);

			let orderitems = [];

			userorder.data.items.forEach(item => {
				orderitems.push({ item_id: item.productid, item_amount: item.productamount });
				console.log(item)
			});

			const dbrow = {
				user_id: userorder.data.userid,
				total_price: userorder.data.baskettotal,
				status: 1,
				OrderItems: orderitems
			};

			const dbentry = await db.Orders.create(dbrow,

				{
					include: [{
						model: db.OrderItems

					}]
				}
			);

			console.log(dbentry);
			console.log(userorder);

			if (!userorder) {
				return { message: 'Cannot create an order', type: false };

			}
			return { message: 'Order created', type: true };

		}
		catch (error) {
			throw error;
		}
	}

	static async getorder(request) {
		const user = await db.Users.findOne({
			where: {
				id: request.userid
			}
		});

		if (!user) {
			return { message: 'User does not exist', type: false };
		}

		const userorder = await db.Orders.findAll({
			where: {
				user_id: user.id
			},
			attributes: ['user_id',
				'total_price',
				'status',
				[db.Sequelize.col('OrderItems.item_amount'), 'item_amount'],
				[db.Sequelize.col('OrderItems.Product.name'), 'item_name']
			],
			include: {
				model: db.OrderItems,
				required: true,
				attributes: [],
				include: {
					model: db.Products,
					required: true,
					attributes: []
				}
			}

		});

		return userorder;
	}

	static async getallorders() {
		const userorders = await db.Orders.findAll({

			attributes: ['user_id',
				'total_price',
				'status',
				[db.Sequelize.col('OrderItems.item_amount'), 'item_amount'],
				[db.Sequelize.col('OrderItems.Product.name'), 'item_name']
			],
			include: {
				model: db.OrderItems,
				required: true,
				attributes: [],
				include: {
					model: db.Products,
					required: true,
					attributes: []
				}
			}

		});

		return userorders;
	}

}
export default OrderService;