// use es6 syntax for this project
import express from 'express';
import http from 'http';
import pb from './public';
import prv from './private';
import parser from 'body-parser';
const app = express();

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

server.listen(3000, () => {
	console.log('Server is runnig at localhost:3000');

});

export default server;