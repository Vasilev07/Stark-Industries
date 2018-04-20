'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('applications', [{
      cv: 'TonyStarkTonyStarkTonyStarkTonyStark',
      comment: 'Tony has no time for comments',
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
      comment: 'Tony has no time for comments',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 1,
    }], {});
  },
};
