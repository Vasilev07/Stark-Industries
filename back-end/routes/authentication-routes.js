const {
    Router,
} = require('express');
const AuthenticationController =
    require('../controllers/authentication-controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new AuthenticationController(data);
    app.use('', router);
    router
        .post('/login', async (req, res) => {
            await controller.login(req, res);
        })
        .post('/register', async (req, res) => {
            await controller.register(req, res);
        });
};

module.exports = {
    init,
};
