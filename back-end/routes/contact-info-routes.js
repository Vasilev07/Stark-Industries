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
        .get('/contact/:id',
            passport.authenticate('jwt-admin', {
                session: false,
            }),
            async (req, res) => {
                const contactId = req.params.id;
                const contact = await controller.getContactById(contactId);
                res.status(200).send(contact);
            })
        .post('/contact',
            passport.authenticate('jwt-admin', {
                session: false,
            }),
            async (req, res) => {
                const newAddress = req.body;
                const newAddressObj = await controller.createNewContact(newAddress);
                if (newAddressObj) {
                    res.status(200).end();
                }
                res.status(401).end();
            })
        .put('/contact/:id', passport.authenticate('jwt-admin', {
                session: false,
            }),
            async (req, res) => {
                const newContactInfo = req.body;
                const contactId = req.params.id;
                const updatedContactInfo = await controller
                    .updateExistingContact(newContactInfo, contactId);
                if (updatedContactInfo) {
                    res.status(200).end();
                }
                res.status(401).end();
            })
        .delete('/contact/:id', passport.authenticate('jwt-admin', {
                session: false,
            }),
            async (req, res) => {
                const contactId = req.params.id;
                const result = await controller.deleteContact(contactId);
                if (result) {
                    res.status(200).end();
                }
                res.status(401).end();
            });
};

module.exports = {
    init,
};