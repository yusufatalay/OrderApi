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
					[db.Sequelqize.col('SubCategory.name'), 'sub_cat_name'],
					[db.Sequelize.col('SubCategory.Category.name'), 'cat_name']]
			});
			// get sub categories and categorues  {}

			return { products };

		}
		catch (error) {

			throw (error);

		}

	}

}

export default ProductService;