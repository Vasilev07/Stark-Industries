// const passport = require('passport');
/* globals __dirname*/

const {
    Router,
} = require('express');
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    },
});

const upload = multer({
    storage,
});

const uploadFields = upload.fields([{
        name: 'cv',
        maxCount: 1,
    },
    {
        name: 'coverLetter',
        maxCount: 1,
    },
]);

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
            const allJobsById =
                await applicationController.getAllJobApplications(jobId);
            res.send(allJobsById);
        })
        .post('/careers/download', async (req, res) => {
            const file = req.body.fileName;
            console.log(__dirname);
            const filePath = path.join(__dirname, '..', file);
            console.log('-'.repeat(40));
            console.log(filePath);
            console.log('-'.repeat(40));
            return res.download(filePath, file);
        })
        .post('/careers/jobDetails/:id/apply', passport.authenticate('jwt', {
            session: false,
        }), uploadFields, async (req, res) => {
            const cvFile = req.files.cv[0].path;
            const coverFile = req.files.coverLetter[0].path;
            const userInformation = req.user;
            const userApplication = req.body;
            const jobId = req.params;
            try {
                await applicationController
                    .createNewApplication(userInformation,
                        userApplication, jobId, cvFile, coverFile);
                res.status(200).end();
            } catch (error) {
                res.json(error.toString());
            }
        });
};

module.exports = {
    init,
};