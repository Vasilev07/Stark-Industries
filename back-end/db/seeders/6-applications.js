'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('applications', [{
      cv: '\\coverLetter-1525540990995-CV_Vladi-1_10183.1.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 1,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 2,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 3,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 4,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 5,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 6,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 7,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 8,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 9,
    }, {
      cv: '\\coverLetter-1525467567858-CoverLetter_Georgre-2_10249.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 10,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('applications', [{
      cv: '\\coverLetter-1525540990995-CV_Vladi-1_10183.1.docx',
      comment: 'I have not time for that but atleast i have to test this awesome site',
      coverLetter: '\\coverLetter-1525467567858-CoverLetter_Georgre-1_10249.docx',
      createdAt: new Date(),
      updatedAt: new Date(),
      jobId: 1,
      UserId: 1,
    }], {});
  },
};