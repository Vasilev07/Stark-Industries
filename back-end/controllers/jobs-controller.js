class JobsController {
    constructor(data) {
        this.data = data;
    }

    async getAllJobs() {
        const allJobs = await this.data.jobs.getAll();
        return allJobs;
    }
    async getJobById(id) {
        const JobById = await this.data.jobs.getById(id);

        return JobById;
    }
    async createJobAd(jobAdObj) {
        const keys = Object.keys(jobAdObj);
        keys.forEach((key) => {
            if (key !== 'id' ||
                key !== 'title' ||
                key !== 'type' ||
                key !== 'description' ||
                key !== 'status' ||
                key !== 'createdAt' ||
                key !== 'updatedAt') {
                throw new Error('All fields are mandatory!');
            }
        });
        const newJobAd = await this.data.jobs.create(jobAdObj);
        return newJobAd;
    }
    async deleteJobAd(jobAdId) {
        const affectedRows = await this.data.jobs.delete(jobAdId);
        if (affectedRows) {
            const remainingJobs = await this.getAllJobs();
            return remainingJobs;
        }
        return null;
    }

    async updateJobAd(updatedJobAd, jobAdId) {
        const state = await this.data.jobs.update(updatedJobAd, jobAdId);
        if (state) {
            const updatedlist = await this.getAllJobs();
            return updatedlist;
        }
        return null;
    }

    async getAllApplicationsForAJob(jobId) {
        let allJobApplications =
        await this.data.application.getAllByValue('jobId', jobId);
        if (allJobApplications.length > 0) {
            allJobApplications = allJobApplications
            .map((application) => application.dataValues);
            allJobApplications =
            await Promise.all(allJobApplications.map(async (application) => {
                const {
                    firstName,
                    lastName,
                    email,
                } = await this.data.users.getById(application.UserId);
                application.firstName = firstName;
                application.lastName = lastName;
                application.email = email;
                return application;
            }));
            return allJobApplications;
        }
        return null;
    }
}
module.exports = JobsController;
