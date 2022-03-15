'use strict';
module.exports = (sequelize, DataTypes) => {
  const Funding = sequelize.define('Funding', {
    projectId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    funded: DataTypes.INTEGER
  }, {});
  Funding.associate = function(models) {
    Funding.belongsTo(models.User, {foreignKey: 'userId'})
    Funding.belongsTo(models.Project, {foreignKey: 'projectId'})
  };
  return Funding;
};
