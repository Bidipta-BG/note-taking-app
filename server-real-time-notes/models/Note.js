const pool = require('../config/db');

const Note = {
    async createNote(title, content, userId) {
        return pool.query(
            'INSERT INTO notes (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
            [title, content, userId]
        );
    },

    async findNotesByUser(userId) {
        return pool.query('SELECT * FROM notes WHERE user_id = $1', [userId]);
    },

    async updateNote(id, content) {
        return pool.query(
            'UPDATE notes SET content = $1 WHERE id = $2 RETURNING *',
            [content, id]
        );
    }
};

module.exports = Note;
