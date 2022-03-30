import db from '../../src/models';
import { validate_product } from '../validation/ProductValidation';
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
			// validate product
			const validated_product = validate_product(product);
			if (!validated_product.type) {
				return { message: validated_product.message, type: validated_product.type }
			}

			// check if the subcategory already exists
			const subcat = await db.Categories.findOne({
				where: {
					id: product.sub_category_id
				},
				include: {
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