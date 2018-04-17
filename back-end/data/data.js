const {
    User,
    role,
    job,
} = require('../db/models');

const Data = require('./generic-data');

module.exports = {
    users: new Data(User),
    roles: new Data(role),
    jobs: new Data(job),
};
