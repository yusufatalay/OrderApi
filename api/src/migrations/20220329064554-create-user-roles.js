'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('UserRoles', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			role_id: {
				type: Sequelize.INTEGER,
				references: {model: 'Roles', key: 'id'}
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: {model: 'Users', key: 'id' }
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('UserRoles');
	}
};