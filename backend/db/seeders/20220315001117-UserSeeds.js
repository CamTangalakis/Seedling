'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
     {
      email: 'demo1@user.io',
      username: 'Demo User',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo2@user.io',
      username: 'FirstName LastName',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo3@user.io',
      username: 'Another Person',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo4@user.io',
      username: 'This Guy',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'dem5o@user.io',
      username: 'Username',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo User', 'FirstName LastName', 'Another Person', 'This Guy', 'Username']}
    }, {});
  }
};
