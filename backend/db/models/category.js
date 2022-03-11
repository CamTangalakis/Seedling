'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Project, {foreignKey: 'categoryId'})
  };
  return Category;
};
