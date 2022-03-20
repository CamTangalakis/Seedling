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
      username: 'Ashleigh Tucker',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo3@user.io',
      username: 'Israel Romero',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo4@user.io',
      username: 'Jay Spencer',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'dem5o@user.io',
      username: 'Alfredo Sugwara',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo6@user.io',
      username: 'Jon Kim',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo7@user.io',
      username: 'Jose Cantu',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo8@user.io',
      username: 'Kelsey Sry',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo9@user.io',
      username: 'Charis Wanken',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
     {
      email: 'demo10@user.io',
      username: 'Rachel White',
      hashedPassword: bcrypt.hashSync('password'),
      profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo User', 'Ashleigh Tucker', 'Israel Romero', 'Jay Spencer', 'Alfredo Sugwara',
      'Jon Kim', 'Jose Cantu', 'Kelsey Sry', 'Charis Wanken', 'Rachel White']}
    }, {});
  }
};
