import OrderService from '../service/OrderService';

class OrderController {

	static async handlecreateorder(request, response) {
		const orderinfo = await OrderService.createorder(request);
		response.json(orderinfo);
	}

}

export default OrderController;
