const passport = require('passport');
const {
    Router,
} = require('express');
const UsersController = require('../controllers/users-controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new UsersController(data);
    app.use('', router);
    router
    .get('/login', (req, res) => {
        res.render('../views/home');
    })
    .post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(300).json(info);
            }
            return req.login(user, (error) => {
                if (error) {
                    return res.status(300).json(info);
                }
                return res.redirect('/');
            })(req, res, next);
        });
    })
    .get('/logout', (req, res) => {
        req.logout();
        req.redirect('/');
    })
    .get('/register', (req, res) => {
        res.render('../views/home');
    })
    .post('/register', async (req, res) => {
        const userObj = req.body;
        // console.log(controller);
        // console.log(controller.data);
        await controller.createNewUser(userObj, userObj.role);
        res.redirect('/login');
    });
};

module.exports = {
    init,
};
