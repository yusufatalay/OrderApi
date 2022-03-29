import express from 'express';
import OrderController from '../controller/OrderController';

const app = express();
app.get('/createorder', OrderController.handlecreateorder);
app.get('/getorder', OrderController.handlegetorder);
app.get('/getallorders', OrderController.handlegetallorders);
module.exports = app;
