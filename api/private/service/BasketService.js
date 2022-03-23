import db from '../../src/models';

class BasketService {

	static async additem(request) {
		try {

			const item = {
				ownerid: request.userid,
				productid: request.body.productid,
				productamount: request.body.productamount

			};
			//	check if that item already exists in the basket
			console.log('LOG');
			console.log(item);
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


}

export default BasketService;