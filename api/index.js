// use es6 syntax for this project
import express from 'express';
import http from 'http';
import pb from './public';
import prv from './private';
import parser from 'body-parser';
import { swaggerOptions } from '../api/src/config/settings';

const app = express();
const expressSwaggerGenerator = require('express-swagger-generator')(app);

const server = http.createServer(app);

app.get('/health', (req, res) => {
	return res.json({
		type: true,
		message: 'System is healthy'
	});
});
app.use(parser.json());
app.use(parser.urlencoded());
app.use('/public', pb);
app.use('/private', prv);

expressSwaggerGenerator(swaggerOptions);
// SWAGGER END

server.listen(3000, () => {
	console.log('Server is runnig at localhost:3000');

});

export default server;