'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {

		await queryInterface.bulkInsert('Products', [{
			name: 'Item1',
			price: 15,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'Item2',
			price: 33,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			name: 'Item3',
			price: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Products', null, {});
	}
};
