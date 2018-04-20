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
        .get('/carrers', async (req, res) => {
            const allJobs = await controller.getAllJobs();
            res.send(allJobs);
        })
        .get('/carrers/jobDetails/:id', async (req, res) => {
            const jobId = req.params.id;
            const allJobsById = await controller.getJobById(jobId);
            res.send(allJobsById);
        })
        .get('/carrers/jobDetails/:id/apply', async (req, res) => {
            const jobId = req.params.id;
            const allJobsById = await controller.getJobById(jobId);
            res.send(allJobsById);
        })
        .post('/carrers/jobDetails/:id/apply', passport.authenticate('jwt', {
            session: false,
        }), async (req, res) => {
            const userInformation = req.user;
            const userApplication = req.body;
            const jobId = req.params;
           console.log(userInformation);
            const createApplication = await applicationController.createNewApplication(userInformation, userApplication, jobId);
            if (createApplication) {
                res.status(200).end();
            } else {
                res.status(401).send(new Error('Already applied for this job'));
            }
        });
};

module.exports = {
    init,
};
