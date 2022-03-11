'use strict';
const {Validator} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.')
          }
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
        confirmEmail(value) {
          if (!(Validator.isEmail(value))) {
            throw new Error('Please enter valid email.')
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    defaultScope: {
      attributes: {
        exclude: ['password', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['password'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function(models) {
    User.hasMany(models.Project, {foreignKey: 'userId', onDelete: 'cascade', hooks: true})
    User.hasMany(models.Funding, {foreignKey: 'userId', onDelete: 'cascade', hooks: true})
  };

  User.prototype.toSafeObject = function() {
    const { id, username, firstName, lastName, email } = this;
    return { id, username, firstName, lastName, email }
  }

  User.prototype.validatePassword = function (password) {
    return password === this.password.toString()
  }

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id)
  }

  User.login = async function ({credential, password}) {
    const { Op } = require('sequelize')
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential
        }
      }
    })
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id)
    }
  }

  User.signup = async function ({ username, firstName, lastName, email, password}) {
    const user = await User.create({
      username, firstName, lastName, email, password
    })
    return await User.scope('currentUser').findByPk(user.id)
  }

  return User;
};
