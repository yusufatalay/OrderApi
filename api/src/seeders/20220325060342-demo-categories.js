'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {



		await queryInterface.bulkInsert('Categories', [{
			name: 'Category 1',
			createdAt: new Date,
			updatedAt: new Date
		}, {
			name: 'Category 2',
			createdAt: new Date,
			updatedAt: new Date
		}, {
			name: 'Category 3',
			createdAt: new Date,
			updatedAt: new Date
		}], {});

	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
};
