const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./config');
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
    issuer: config.JWT_ISS,
};

const initLogged = (app, data) => {
    return new JwtStrategy(opts, async (jwtPayload, done) => {
        const userFound = await data.users.getById(jwtPayload.sub);
        // console.log(userFound);
        if (userFound) {
            return done(null, userFound);
        }

        return done('Not authenticated', false);
    });
};

const initAdmin = (app, data) => {
    return new JwtStrategy(opts, async (jwtPayload, done) => {
        const userFound = await data.users.getById(jwtPayload.sub);
        // console.log(userFound);
        if (userFound) {
            if (userFound.roleId >= 2) {
                return done(null, userFound);
            }
            return done('Access Denied', false);
        }

        return done('Not authenticated', false);
    });
};

module.exports = {
    initLogged,
    initAdmin,
};
