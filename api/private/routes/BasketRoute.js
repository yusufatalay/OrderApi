import express from 'express';
import BasketController from '../controller/BasketController';

const app = express();

app.post('/addproduct', BasketController.handleadditem);

module.exports = app;