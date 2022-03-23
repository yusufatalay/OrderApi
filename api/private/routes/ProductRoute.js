import express from 'express';
import ProductController from '../controller/ProductController';

const app = express();

app.get('/all', ProductController.handlegetall);

module.exports = app;