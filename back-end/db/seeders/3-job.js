'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('jobs', [{
      title: 'Boss',
      type: 'IT',
      description: 'StarkStarkStarkStarkStarkStarkStarkStarkStark',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', [{
      title: 'Boss',
      type: 'IT',
      description: 'StarkStarkStarkStarkStarkStarkStarkStarkStark',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
};
