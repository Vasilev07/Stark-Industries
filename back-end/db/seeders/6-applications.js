'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('applications', [{
      cv: 'TonyStarkTonyStarkTonyStarkTonyStark',
      coverLetter: 'TonyStarkTonyStark',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('applications', [{
      cv: 'TonyStarkTonyStarkTonyStarkTonyStark',
      coverLetter: 'TonyStarkTonyStark',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 1,
    }], {});
  },
};
