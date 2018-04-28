// const passport = require('passport');
const {
    Router,
} = require('express');

const passport = require('passport');

const UserController = require('../controllers/users-controller');


const init = (app, data) => {
    const router = new Router();
    const controller = new UserController(data);
    app.use('', router);
    router
        .get('/admin/users', passport.authenticate('jwt-admin', {
            session: false,
        }), async (req, res) => {
            const allUsersInformation = await controller
                .getAllUserDetails();
            res.send(allUsersInformation);
        });
};

module.exports = {
    init,
};
