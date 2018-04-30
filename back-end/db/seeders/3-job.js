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
    }, {
      title: 'IT Specialist',
      type: 'Developement',
      description: 'DEVELOP SOME STRANGE THINGS',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Hygenist',
      type: 'Hygen',
      description: 'Some Text here',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Project manager at stark industries',
      type: 'IT',
      description: 'Project awesome things Text here',
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
    }, {
      title: 'IT Specialist',
      type: 'Developement',
      description: 'DEVELOP SOME STRANGE THINGS',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Hygenist',
      type: 'Hygen',
      description: 'Some Text here',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Project manager at stark industries',
      type: 'IT',
      description: 'Project awesome things Text here',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },
};
