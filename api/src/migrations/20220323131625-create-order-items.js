'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('OrderItems', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			order_id: {
				type: Sequelize.INTEGER,
				references: { model: 'Orders', key: 'id' }
			},
			item_id: {
				type: Sequelize.INTEGER,
				references: { model: 'Products', key: 'id' }

			},
			item_amount: {
				type: Sequelize.INTEGER
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
		await queryInterface.dropTable('OrderItems');
	}
};