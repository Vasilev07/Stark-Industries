const passport = require('passport');
// const {
//     Router,
// } = require('express');
const UserController = require('../controllers/users-controller');

const init = (app, data) => {
    // const router = new Router();
    const controller = new UserController(data);
    app.get('/login', (req, res) => {
        res.render('../views/home');
    });
    app.post('/login', (req, res, next) => {
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
    });
    app.get('/logout', (req, res) => {
        req.logout();
        req.redirect('/');
    });
    app.get('/register', (req, res) => {
        res.render('../views/home');
    });
    app.post('/register', async (req, res) => {
        const userObj = req.body;
        await controller.users.createNewUser(userObj, userObj.role);
        res.redirect('/login');
    });
};

module.exports = {
    init,
};
