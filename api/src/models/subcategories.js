'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

	class SubCategories extends Model {

		static associate(models) {
			// define association here
			models.SubCategories.belongsTo(models.Categories, { foreignKey: 'parent_category_id' });
			models.SubCategories.hasMany(models.Products, { foreignKey: 'sub_category_id' });
		}

	}
	SubCategories.init({
		parent_category_id: DataTypes.INTEGER,
		name: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'SubCategories'
	});
	return SubCategories;
};