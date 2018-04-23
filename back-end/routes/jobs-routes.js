// const passport = require('passport');
const {
    Router,
} = require('express');
const passport = require('passport');

const JobsController = require('../controllers/jobs-controller');
const ApplicationController = require('../controllers/application-controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new JobsController(data);
    const applicationController = new ApplicationController(data);
    app.use('', router);
    router
        .get('/careers', async (req, res) => {
            const allJobs = await controller.getAllJobs();
            res.send(allJobs);
        })
        .get('/careers/jobDetails/:id', async (req, res) => {
            const jobId = req.params.id;
            const allJobsById = await controller.getJobById(jobId);
            res.send(allJobsById);
        })
        .get('/careers/jobDetails/:id/apply', async (req, res) => {
            const jobId = req.params.id;
            const allJobsById = await controller.getJobById(jobId);
            res.send(allJobsById);
        })
        .post('/careers/jobDetails/:id/apply', passport.authenticate('jwt', {
            session: false,
        }), async (req, res) => {
            const userInformation = req.user;
            const userApplication = req.body;
            const jobId = req.params;
            try {
                await applicationController
                    .createNewApplication(userInformation,
                        userApplication, jobId);
                res.status(200).end();
            } catch (error) {
                res.json(error.toString());
            }
        });
};

module.exports = {
    init,
};
