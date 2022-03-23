'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Products extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			models.Products.hasMany(models.Baskets, {
				foreignKey: 'productid'
			});
		}
		
	}
	Products.init({
		name: DataTypes.STRING,
		price: DataTypes.DOUBLE
	}, {
		sequelize,
		modelName: 'Products',
	});
	return Products;
};