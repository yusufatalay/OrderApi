import express from 'express';
import AccountController from '../controller/AccountController';
const app = express();

app.post('/register', AccountController.handleregister);
app.post('/login', AccountController.handlelogin);
module.exports = app;