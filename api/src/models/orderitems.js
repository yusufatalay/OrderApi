'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class OrderItems extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.OrderItems.belongsTo(models.Orders, { foreignKey: 'order_id' });
			models.OrderItems.belongsTo(models.Products, { foreignKey: 'item_id' });

		}

	}

	OrderItems.init({
		order_id: DataTypes.INTEGER,
		item_id: DataTypes.INTEGER,
		item_amount: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'OrderItems'
	});
	return OrderItems;
};