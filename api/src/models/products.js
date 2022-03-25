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
			models.Products.belongsTo(models.SubCategories, { foreignKey: 'sub_category_id' });
			models.Products.hasMany(models.OrderItems, { foreignKey: 'item_id' });

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