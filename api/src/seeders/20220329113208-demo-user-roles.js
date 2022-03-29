'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {


		await queryInterface.bulkInsert('UserRoles', [{
			role_id: 1,	// john
			user_id: 1,	// admin
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			role_id: 2,	// elliot
			user_id: 2,	// member
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
