class UserController {
    constructor(data) {
        this.data = data;
    }

    async getAllUserDetails() {
        const allUsers = await this.data.users.getAll();

        return allUsers;
    }
}

module.exports = UserController;
