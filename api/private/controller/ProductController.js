import ProductService from '../service/ProductService';
class ProductController {

	static async handlegetall(request, response) {
		const products = await ProductService.getall();

		if (products) {
			response.json({ data: products, message: 'OK', type: true });
		}
		else {
			response.json({ message: 'Cannot retrieve products', type: false });
		}

	}
	
}

export default ProductController;