// const passport = require('passport');
const {
    Router,
} = require('express');
const passport = require('passport');

const JobsController = require('../controllers/jobs-controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new JobsController(data);
    app.use('', router);
    router
        .get('/carrers', async (req, res) => {
            const allJobs = await controller.getAllJobs();
            res.send(allJobs);
        })
        .get('/carrers/jobDetails/:id', async (req, res) => {
            const jobId = req.params.id;
            const allJobsById = await controller.getAllJobsById(jobId);
            res.send(allJobsById);
        })
        .get('/carrers/jobDetails/:id/apply', async (req, res) => {
            const jobId = req.params.id;
            const allJobsById = await controller.getAllJobsById(jobId);
            res.send(allJobsById);
        })
        .post('/carrers/jobDetails/:id/apply', passport.authenticate('jwt', {
            session: false,
        }), (req, res) => {
            const newApplication = req.body;
            console.log(req.header); // job ID
            // console.log(req.body);
            console.log(req.params); // job ID
            res.send('nekuv string');
        })

};

module.exports = {
    init,
};