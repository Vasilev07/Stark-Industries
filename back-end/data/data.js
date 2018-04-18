const {
    User,
    role,
    job,
    contactInfo,
} = require('../db/models');

const Data = require('./generic-data');

module.exports = {
    users: new Data(User),
    roles: new Data(role),
    jobs: new Data(job),
    contactInfo: new Data(contactInfo),
};
