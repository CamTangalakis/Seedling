'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    goalAmount: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    Project.hasMany(models.Funding, {foreignKey: 'projectId', onDelete: 'cascade', hooks: true})
    Project.belongsTo(models.User, {foreignKey: 'userId'})
    Project.belongsTo(models.Category, {foreignKey: 'categoryId'})
    Project.hasMany(models.Image, {foreignKey: 'projectId', onDelete: 'cascade', hooks: true})
  };
  return Project;
};
