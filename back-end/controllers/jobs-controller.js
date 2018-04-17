class JobsController {
    constructor(data) {
        this.data = data;
    }

    async getAllJobs() {
        const allJobs = await this.data.jobs.getAll();
        return allJobs;
    }
    async getAllJobsById(id) {
        const allJobsById = await this.data.jobs.getById(id);

        return allJobsById;
    }
}
module.exports = JobsController;
