const {
    User,
} = require('../db/models');

const Data = require('./generic-data');

module.exports = {
    users: new Data(User),
};
