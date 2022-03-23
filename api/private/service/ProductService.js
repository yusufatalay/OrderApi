import db from '../../src/models';

class ProductService {

	static async getall() {
		try {

			const products = await db.Products.findAll();

			return products;

		}
		catch (error) {

			throw (error);

		}

	}

}

export default ProductService;