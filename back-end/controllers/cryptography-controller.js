const bcrypt = require('bcrypt');

class Cryptography {
    constructor() {

    }
    hashPassword(passwordInPlaintext) {
        const saltRounds = 10;
        return bcrypt.hash(passwordInPlaintext, saltRounds);
    }

    comparePasswords(password, hash) {
        return bcrypt.compare(password, hash);
    }
}

module.exports = Cryptography;
