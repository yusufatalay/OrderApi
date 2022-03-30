import express from 'express';
import AccountController from '../controller/AccountController';
const app = express();
/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
app.post('/register', AccountController.handleregister);
app.post('/login', AccountController.handlelogin);
module.exports = app;