const passport = require('passport');

const init = (app) => {
    app.get('/login', (req, res) => {
        res.render('../views/home');
    });
    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: false,
        })
    );

    app.get('/logout', (req, res) => {
        req.logout();
        req.redirect('/');
    });
};

module.exports = {
    init,
};
