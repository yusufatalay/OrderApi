'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('RolePermissions', [{
			permission_id: 1,	// PERMISSION_ADD_PRODUCT
			role_id: 1,	// admin
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission_id: 2,	// PERMISSION_LIST_PRODUCTS
			role_id: 1,	// admin
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			permission_id: 2,	// PERMISSION_LIST_PRODUCTS
			role_id: 2,	// member
			createdAt: new Date(),
			updatedAt: new Date()
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
