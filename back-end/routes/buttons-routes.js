const {
    Router,
} = require('express');
const passport = require('passport');

const ButtonsController = require('./../controllers/buttons-controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new ButtonsController(data);
    app.use('', router);

    router
        .get('/buttons', async (req, res) => {
            const allButtons = await controller.getAllButtons();
            if (allButtons) {
                res.status(200).send(allButtons);
            } else {
                res.send(401).end();
            }
        })
        .get('/buttons/:id', passport.authenticate('jwt-admin', {
            session: false,
        }), async (req, res) => {
            const buttonId = req.params.id;
            const button = await controller.getById(buttonId);
            if (button) {
                res.status(200).send(button);
            } else {
                res.status(401);
            }
        })
        .post('/buttons', passport.authenticate('jwt-admin', {
            session: false,
        }), async (req, res) => {
            const newButtonObj = req.body;
            const createdButton = await controller.createButton(newButtonObj);
            if (createdButton) {
                res.status(200).end();
            } else {
                res.status(401).end();
            }
        })
        .put('/buttons/:id', passport.authenticate('jwt-admin', {
            session: false,
        }), async (req, res) => {
            const buttonId = req.params.id;
            const newButtonInfo = req.body;
            const updatedButton =
                await controller.updatedButton(newButtonInfo, buttonId);
            if (updatedButton) {
                res.status(200).end();
            } else {
                res.status(401).end();
            }
        })
        .delete('buttons/:id', passport.authenticate('jwt-admin', {
            session: false,
        }), async (req, res) => {
            const buttonId = req.params.id;
            const deleteSuccessful = await controller.deleteButton(buttonId);
            if (deleteSuccessful) {
                res.stats(200).end();
            } else {
                res.status(401).end();
            }
        });
};

module.exports = {
    init,
};
