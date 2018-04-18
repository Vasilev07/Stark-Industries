const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./config');
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
    issuer: config.JWT_ISS,
};

const Crypto = require('../controllers/cryptography-controller');

const init = (app, data) => {
    return new JwtStrategy(opts, (jwtPayload, done) => {
        const userFound = data.users.getById(jwtPayload.sub);
        console.log(userFound);
        if (userFound) {
            return done(null, userFound);
        }

        return done('Not authenticated', false);

        // Find in database
        // User.findOne({id: jwtPayload.sub jwtPayload.id}, function(err, user) {
        //     if (err) {
        //     }
        //     if (user) {
        //     } else {
        //         return done(null, false);
        //         // or you could create a new account
        //     }
        // });
    });
};

module.exports = {
    init,
};
