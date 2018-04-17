'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contactInfos', [{
      name: 'Main Address',
      value: 'Stark Tower',
      icon: 'StarkStarkStarkStarkStarkStarkStarkStarkStark',
      isPrimary: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contactInfos', [{
      name: 'Main Address',
      value: 'Stark Tower',
      icon: 'StarkStarkStarkStarkStarkStarkStarkStarkStark',
      isPrimary: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1,
    }], {});
  },
};
