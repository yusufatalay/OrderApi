'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {

		await queryInterface.bulkInsert('Products', [{
			name: 'Item1',
			price: 15,
			createdAt: new Date(),
			updatedAt: new Date(),
			sub_category_id: 2
		},
		{
			name: 'Item2',
			price: 33,
			createdAt: new Date(),
			updatedAt: new Date(),
			sub_category_id: 1

		},
		{
			name: 'Item3',
			price: 1,
			createdAt: new Date(),
			updatedAt: new Date(),
			sub_category_id: 3

		}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Products', null, {});
	}
};
