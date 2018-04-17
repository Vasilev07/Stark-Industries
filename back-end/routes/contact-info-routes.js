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
        .post('/contact', async (req, res) => {
            const newAddress = req.body;
            if (req.isAuthenticated() && req.user.role >= 2) {
                await controller.createNewContact(newAddress);
            } else {
                throw new Error('Access: Denied.');
            }
            res.status(200).end();
        })
};

module.exports = {
    init,
};