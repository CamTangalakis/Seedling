'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        category: 'Tech and Gadgets'
      },
      {
        category: 'Food'
      },
      {
        category: 'Community'
      },
      {
        category: 'Environment and Nature'
      },
      {
        category: 'Art and Design'
      },
      {
        category: 'Gaming'
      },
      {
        category: 'Music'
      },
      {
        category: 'Literature and Film'
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Categories', {
      category: { [Op.in]: ['Tech and Gadgets', 'Food', 'Community', 'Environment and Nature',
    'Art and Design', 'Gaming', 'Music', 'Literature and Film'] }
    }, {});
  }
};
