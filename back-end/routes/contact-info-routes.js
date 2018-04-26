const passport = require('passport');
const {
    Router,
} = require('express');
const ContactInfoController = require('../controllers/contact-info-controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new ContactInfoController(data);
    app.use('', router);

    router
        .get('/contact', async (req, res) => {
            const allContacts = await controller.getAllContactInfo();
            const primaryAddress = await controller.getPrimaryAddress('oldest');
            res.status(200).send({
                allContacts,
                primaryAddress,
            });
        })
        .post('/contact',
        passport.authenticate('jwt-admin', { session: false }),
         async (req, res) => {
                const newAddress = req.body;
                    await controller.createNewContact(newAddress);
                    res.status(200).end();
            });
};

module.exports = {
    init,
};
