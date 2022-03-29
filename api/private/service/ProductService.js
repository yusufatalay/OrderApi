import db from '../../src/models';
class ProductService {

	static async getall() {
		try {
			const products = await db.Products.findAll({
				include: {
					model: db.SubCategories,
					attributes: [],
					include: {
						model: db.Categories,
						attributes: []

					}
				},
				attributes: ['id',
					'name',
					[db.Sequelize.col('SubCategory.name'), 'sub_cat_name'],
					[db.Sequelize.col('SubCategory.Category.name'), 'cat_name']]
			});
			// get sub categories and categorues  {}

			return { products };

		}
		catch (error) {

			throw (error);

		}

	}

	static async addproduct(request) {
		try {
			const product = {
				name: request.body.name,
				price: request.body.price,
				sub_category_id: request.body.sub_category_id
			};

			// check if the subcategory already exists
			console.log(product);
			const subcat = await db.Categories.findOne({
				where: {
					id: product.sub_category_id
				},
				include:{
					model: db.Products
				}
			});

			if (!subcat) {
				return { data: null, messsage: 'Given sub category does not exists', type: false };
			}
			console.log(subcat);
			// check if that product already exists
			const prod = await db.Products.findOne({
				where: {
					name: product.name
				},
				attributes: ['id']
			});
			console.log(prod);
			if (prod) {
				return { data: null, messsage: 'Production already exists', type: false };
			}

			// insert the production 
			const addedproduct = await db.Products.create(product);
			return { data: addedproduct, message: 'Production added', type: true };

		} 
		catch (error) {
			throw error;
		}
	}

}

export default ProductService;