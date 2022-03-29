'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Roles', [{
			role_name: 'admin',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			role_name: 'member',
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
