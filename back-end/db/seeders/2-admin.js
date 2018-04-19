'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        userName: 'TonyStark',
        firstName: 'Tony',
        lastName: 'Stark',
        email: 'tonystark@starkindustries.com',
        password:
        '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
        createdAt: new Date(),
        updatedAt: new Date(),
        roleId: 3,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [{
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

