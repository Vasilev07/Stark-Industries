const {
    User,
    job,
} = require('../db/models');

const Data = require('./generic-data');

module.exports = {
    users: new Data(User),
    jobs: new Data(job),
};
