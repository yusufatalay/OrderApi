import OrderService from '../service/OrderService';

class OrderController {

	static async handlecreateorder(request, response) {
		const orderinfo = await OrderService.createorder(request);
		response.json(orderinfo);
	}

	static async handlegetorder(request, response) {
		const orderinfo = await OrderService.getorder(request);
		response.json({ data: orderinfo, message: 'User order fetched', type: true });
	}

	static async handlegetallorders(request, response) {
		const orderinfo = await OrderService.getallorders();
		response.json({ data: orderinfo, message: 'All orders has fetched', type: true });
	}

}

export default OrderController;
