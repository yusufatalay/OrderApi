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
			securityDefinitions: {
				JWT: {
					type: 'apiKey',
					in: 'header',
					name: 'Authorization',
					description: 'Users are authorized with JWT'
				}
			}
		},
		basedir: __dirname,
		files: [
			'../../public/controller/**/*.js',
			'../../private/controller/**/*.js'
		]
	}
}