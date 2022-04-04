'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Baskets extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			/*
			 * define association here
			 * models.Baskets.belongsTo(models.Users, {foreignkey: 'ownerid'});
			 */
			models.Baskets.belongsTo(models.Products, {
				foreignKey: 'productid'
			});

		}

	}
	Baskets.init({
		ownerid: DataTypes.INTEGER,
		productid: DataTypes.INTEGER,
		productamount: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Baskets'
	});
	return Baskets;
};