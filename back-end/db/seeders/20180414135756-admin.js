'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        userName: 'TonyStark',
        firstName: 'Tony',
        lastName: 'Stark',
        email: 'tonystark@starkindustries.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 3,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{
        userName: 'TonyStark',
        firstName: 'Tony',
        lastName: 'Stark',
        email: 'tonystark@starkindustries.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 3,
      }]);
  },
};

