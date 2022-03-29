import express from 'express';
import ProductController from '../controller/ProductController';
import Helpers from '../../utils/helpers';
const app = express();

app.get('/all', Helpers.authorizeUser(2), ProductController.handlegetall);
app.post('/add', Helpers.authorizeUser(1), ProductController.handleaddproduct);

module.exports = app;