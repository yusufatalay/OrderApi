module.exports = {
	swaggerOptions: {
		swaggerDefinition: {
			info: {
				description: 'Order API',
				title: 'ORDER API',
				version: '1.0.0'
			},
			host: 'localhost:3000',
			basePath: '/',
			produces: [
				'application/json'
			],
			schemes: ['http'],
			// securityDefinition
		},
		basedir: __dirname,
		files: ['../../account/controllers/**/*.js', '../../account/controllers/**/*.js']
	}
};