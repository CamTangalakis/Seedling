'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        firstName: 'Demo',
        lastName: 'Lition',
        password: 'password',
      },
      {
        email: 'fakeuser@gmail.com',
        username: 'FakeUser1',
        firstName: 'Demo2',
        lastName: 'Lition',
        password: 'password',
      },
      {
        email: 'anotherfakeuser@gmail.com',
        username: 'FakeUser2',
        firstName: 'Demo3',
        lastName: 'Lition',
        password: 'password',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
