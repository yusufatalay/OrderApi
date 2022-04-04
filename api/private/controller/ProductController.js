import ProductService from '../service/ProductService';

/**
 * @typedef new_product
 * @property  {string} name.required 
 * @property  {integer} price.required 
 * @property  {integer} sub_category_id.required
 */


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

	/**
	 * This function comment is parsed by doctrine
	 * @route POST /private/v1/product/add
	 * @group product - Operations about controlling products
	 * @param {new_product.model} new_product.body.required 
	 * @produces application/json 
	 * @consumes application/json 
	 * @returns {object} success -  {data: new_product, message: 'Product added', type: true}
	 * @returns {object} existing product -  {data: null, message: 'Product already exists', type: false}
	 * @returns {object} validation error -  {data: null, message: validation error message, type: false}
	 */
	static async handleaddproduct(request, response) {
		const result = await ProductService.addproduct(request);
		response.json(result);
	}

}
export default ProductController;