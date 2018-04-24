/* globals __dirname*/
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const cors = require('cors');
const passport = require('passport');
const strategy = require('./jwt-strategy');

const init = (app, data) => {
    if (typeof app.use !== 'function' ||
        typeof app.set !== 'function') {
        throw new Error('Invalid app');
    }
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));

    app.use('/static', express.static(path.join(__dirname, '../../public')));
    // not sure if we will use public att all
    app.use(morgan('combined'));
    // IF ISSUES WITH STRATEGY INSTANCE CHECK BELLOW LINE
    passport.use('jwt', strategy.initLogged(app, data));
    passport.use('jwt-admin', strategy.initAdmin(app, data));
    app.set('view engine', 'pug');
};

module.exports = {
    init,
};
