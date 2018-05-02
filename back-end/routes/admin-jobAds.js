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
        .get('/admin/careers', passport.authenticate('jwt-admin',
        { session: false }), async (req, res) => {
            const allJobAds = await controller.getAllJobs();
            res.status(200).send(allJobAds);
        })
        .get('/admin/careers/jobDetails/:id', passport.authenticate('jwt-admin',
        { session: false }), async (req, res) => {
            const jobId = req.params.id;
            const job = await controller.getJobById(jobId);
            res.status(200).send(job);
        })
        .post('/admin/careers/create', passport.authenticate('jwt-admin',
        { session: false }), async (req, res) => {
            const newJobObj = req.body;
            console.log(newJobObj);
            await controller.createJobAd(newJobObj);
            res.status(200).end();
        })
        .put('/admin/careers/jobDetails/:id', passport.authenticate('jwt-admin',
        { session: false }), async (req, res) => {
            const updatedJobAd = req.body;
            const jobAdId = req.params.id;
            const AllJobsAfterUpdate =
            await controller.updateJobAd(updatedJobAd, jobAdId);
            if (AllJobsAfterUpdate) {
                res.send(200).send(AllJobsAfterUpdate);
            } else {
                res.send(422).end();
            }
        })
        .delete('/admin/careers/jobDetails/:id', passport
        .authenticate('jwt-admin', { session: false }), async (req, res) => {
            const jobToDeleteId = req.params.id;
            const remainingJobs = await controller.deleteJobAd(jobToDeleteId);
            if (remainingJobs) {
                res.status(200).send(remainingJobs);
            } else {
                res.status(422).end();
            }
        })
        .get('/admin/careers/jobDetails/:id/applications', passport
        .authenticate('jwt-admin', { session: false }), async (req, res) => {
            const jobId = req.params.id;
            const allApplicationsForJob =
            await controller.getAllApplicationsForAJob(jobId);
            if (allApplicationsForJob) {
                res.status(200).send(allApplicationsForJob);
            } else {
                res.status(401).end();
            }
        });
};

module.exports = {
    init,
};
