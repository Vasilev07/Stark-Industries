class ApplicationController {
    constructor(data) {
        this.data = data;
    }

    async createNewApplication(userInformation, userApplication, jobId, cvFile, coverFile) {
        const userApplications = await this.data.application
            .getAllUserIds(userInformation.id);
        const allJobsApplicationsIds = [];
        userApplications.map((application) => {
            allJobsApplicationsIds.push(application.jobId);
        });
        const ifApplicationExists = await allJobsApplicationsIds
            .indexOf(+jobId.id);
        if (ifApplicationExists === -1) {
            const userObj = {
                cv: cvFile,
                coverLetter: coverFile,
                comment: userApplication.comment,
                jobId: +jobId.id,
                UserId: userInformation.id,
            };

            await this.data.application.create(userObj);
        } else {
            throw new Error('You have already applied for this job');
        }
    }

    async getNumberOfApplications(userId) {
        const userApplications = await this.data.application
            .getAllUserIds(userId);
        const allJobsApplicationsIds = [];
        userApplications.map((application) => {
            allJobsApplicationsIds.push(application.jobId);
        });
        return allJobsApplicationsIds.length;
    }
}

module.exports = ApplicationController;
