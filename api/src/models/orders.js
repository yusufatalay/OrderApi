'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Orders extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.Orders.hasMany(models.OrderItems, { foreignKey: 'order_id' });
		}

	}

	Orders.init({
		user_id: DataTypes.INTEGER,
		total_price: DataTypes.DOUBLE,
		status: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Orders'
	});




	return Orders;
};