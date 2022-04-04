'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('RolePermissions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			permission_id: {
				type: Sequelize.INTEGER,
				references: { model: 'Permissions', key: 'id' },
				allowNull: false

			},
			role_id: {
				type: Sequelize.INTEGER,
				references: { model: 'Roles', key: 'id' },
				allowNull: false

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
		await queryInterface.dropTable('RolePermissions');
	}
};