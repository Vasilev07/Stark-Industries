const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./config');
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET,
    issuer: config.JWT_ISS,
};

const init = (app, data) => {
    return new JwtStrategy(opts, (jwtPayload, done) => {
        const userFound = data.users.getByValue('userName', jwtPayload.sub);
        console.log(jwtPayload);
        console.log(userFound);
        if (userFound) {
            return done(null, userFound);
        }

        return done('Not authenticated', false);
    });
};

module.exports = {
    init,
};
