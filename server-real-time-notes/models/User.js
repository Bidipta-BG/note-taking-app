const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    async createUser(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
            [username, email, hashedPassword]
        );
    },

    async findUserByEmail(email) {
        return pool.query('SELECT * FROM users WHERE email = $1', [email]);
    }
};

module.exports = User;
