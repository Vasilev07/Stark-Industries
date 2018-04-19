// const passport = require('passport');
const {
    Router,
} = require('express');

const passport = require('passport');

const UserController = require('../controllers/users-controller');
const ApplicationController = require('../controllers/application-controller');


const init = (app, data) => {
    const router = new Router();
    const controller = new UserController(data);
    const applicationController = new ApplicationController(data);
    app.use('', router);
    router
        .get('/admin/users', passport.authenticate('jwt-admin', {
            session: false,
        }), async (req, res) => {
            const allUsersInformation = await controller
                .getAllUserDetails();
            const userInformation = req.user.id;
            const numberOfApplications = await applicationController
                .getNumberOfApplications(userInformation);
            res.send({
                allUsersInformation,
                numberOfApplications,
            });
        });
};

module.exports = {
    init,
};