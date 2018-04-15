const Cryptography = require('./cryptography-controller');
class UsersController {
    constructor(data) {
        this.data = data;
    }

    createNewUser(userObj, role) {
        const password = userObj.password;
        let hashPassword = null;
        const hasher = new Cryptography();
        if (role === 'owner') {
            throw new Error('Tony Stark is already'+
            ' the owner of Stark Industries');
        }
        const {
            id,
        } = this.data.users.getByValue('name', role);
        hashPassword = hasher.hashPassword(password);
        userObj.password = hashPassword;
        userObj.roleId = id;

        const newUser = this.data.users.create(userObj);
        return newUser;
    }
}

module.exports = UsersController;
