'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funding = sequelize.define('Funding', {
    funded: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Funding.associate = function(models) {
    Funding.belongsTo(models.User, {foreignKey: 'userId'})
    Funding.belongsTo(models.Project, {foreignKey: 'projectId'})
  };
  return Funding;
};
