'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imageUrl: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Project, {foreignKey: 'projectId'})
  };
  return Image;
};
