'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {


		await queryInterface.bulkInsert('Permissions', [ {
			permission: 'PERMISSION_ADD_PRODUCT',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission: 'PERMISSION_LIST_PRODUCT',
			createdAt: new Date(),
			updatedAt: new Date()
		} ], {});

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
