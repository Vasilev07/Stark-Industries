const ApplicationController = require('./application-controller');
class UserController extends ApplicationController {
    super(data) {
        this.data = data;
    }

    async getAllUserDetails() {
        let allUsers = await this.data.users.getAll();
        allUsers = await Promise.all(allUsers.map(async (user) => {
            user.dataValues.applicationsCount = await
            this.getNumberOfApplications(user.id || user.dataValues.id);
            return user.dataValues;
        }));
        return allUsers;
    }
}

module.exports = UserController;
