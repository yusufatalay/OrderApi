'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {

		await queryInterface.bulkInsert('SubCategories', [{
			parent_category_id: 1,
			name: 'Sub Category 1',
			createdAt: new Date,
			updatedAt: new Date
		},
		{
			parent_category_id: 2,
			name: 'Sub Category 2',
			createdAt: new Date,
			updatedAt: new Date
		}, {
			parent_category_id: 3,
			name: 'Sub Category 3',
			createdAt: new Date,
			updatedAt: new Date
		}, {
			parent_category_id: 3,
			name: 'Sub Category 4',
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
