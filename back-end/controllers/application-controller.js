class ApplicationController {
    constructor(data) {
        this.data = data;
    }

    async createNewApplication(userInformation, userApplication, jobId) {
        const userApplications = await this.data.application.getAllUserIds(userInformation.id);
        const allJobsApplicationsIds = [];
        userApplications.map((application) => {
            allJobsApplicationsIds.push(application.jobId);
        });
        const ifApplicationExists = allJobsApplicationsIds.indexOf(jobId);
        if (ifApplicationExists < 0) {
            throw new Error('You have already applied for this job');
        } else {
            const userObj = {
                cv: userApplication.cv,
                coverLetter: userApplication.coverLetter,
                jobId: +jobId.id,
                UserId: userInformation.id,
            };

            const newApplication = await this.data.application.create(userObj);

            return newApplication;
        }
    }
}

module.exports = ApplicationController;
