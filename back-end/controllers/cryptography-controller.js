const bcrypt = require('bcrypt');

class Cryptography {
    hashPassword(passwordInPlaintext) {
        const saltRounds = 10;
        return bcrypt.hash(passwordInPlaintext, saltRounds);
    }

    comparePasswords(password, hash) {
        return bcrypt.compare(password, hash);
    }
}

module.exports = Cryptography;
