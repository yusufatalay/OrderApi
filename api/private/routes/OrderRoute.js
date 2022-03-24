import express from 'express';
import OrderController from '../controller/OrderController';

const app = express();

app.get('/createorder', OrderController.handlecreateorder);

module.exports = app;
