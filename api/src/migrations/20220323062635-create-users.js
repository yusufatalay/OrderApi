'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false

			},
			last_name: {
				type: Sequelize.STRING,
				allowNull: false

			},
			password: {
				type: Sequelize.STRING,
				allowNull: false

			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true

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
		await queryInterface.dropTable('Users');
	}
};