'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
        name: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'owner',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', [{
        name: 'user',
      }, {
        name: 'admin',
      }, {
        name: 'owner',
      }]);
  },
};
