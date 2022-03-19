'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    projectId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Project, {foreignKey: 'projectId'})
  };
  return Image;
};
