const config = require('../configuration');

const session = require('express-session');
const cookieParser = require('cookie-parser');

const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const Crypto = require('../controllers/cryptography-controller');

const users = [{
    username: 'Pesho',
    password: '123456',
}];

const init = (app) => {
    passport.use(new Strategy(
        (username, password, done) => {
            const user = users.find((dbUser) => dbUser.username === username);

            const comparePasswords = new Crypto().comparePasswords;

            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.',
                });
            }
            const checkIfPassMatch = comparePasswords(password, user.password);
            if (user.password !== password) {
                return done(null, false, {
                    message: 'Incorrect password.',
                });
            }
            return done(null, user);
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user.username);
    });

    passport.deserializeUser((username, done) => {
        const user = users.find((dbUser) => dbUser.username === username);
        if (!user) {
            return done(new Error('invalid user'));
        }
        return done(null, user);
    });

    app.use(cookieParser());
    app.use(session({
        secret: config.secret,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = {
    init,
};
