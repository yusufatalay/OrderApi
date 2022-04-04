import express from 'express';
import path from 'path';
import Helpers from '../utils/helpers';

const app = express();
const basename = path.basename(__filename);

const folderRoute = `${__dirname}/routes`;
require('fs')
	.readdirSync(folderRoute)
	.filter((file) => {

		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);

	})
	.forEach((file) => {

		const routeName = Helpers.getFileRoute(file);
		app.use(
			`/v1/${routeName}`,
			require(folderRoute + path.sep + file.split('.')[0])
		);

	});

module.exports = app;