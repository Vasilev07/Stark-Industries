'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('buttons', [{
      name: 'Careers',
      targetURL: '/Careers',
      iconURL: '/Careers',
      type: 'link',
      hidden: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('buttons', [{
      name: 'Careers',
      targetURL: '/Careers',
      iconURL: '/Careers',
      type: 'link',
      hidden: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
    }], {});
  },
};
