'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {

		await queryInterface.bulkInsert('Users', [{
			first_name: 'John',
			last_name: 'Doe',
			password: 'a23b602a20d340ce3dda1396e4839881',
			email: 'jon@doe.com',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			first_name: 'Eliot',
			last_name: 'Anderson',
			password: '179ad45c6ce2cb97cf1029e212046e81', //testpass
			email: 'eliot@anderson.com',
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {});

	},

	async down(queryInterface, Sequelize) {

		await queryInterface.bulkDelete('Users', null, {});

	}
};
