const express = require('express');
const Note = require('../models/Note');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { title, content } = req.body;
    const note = await Note.createNote(title, content, req.user.id);
    return res.send(note.rows);
});

router.get('/', auth, async (req, res) => {
    const notes = await Note.findNotesByUser(req.user.id);
    return res.send(notes.rows);
});

router.put('/:id', auth, async (req, res) => {
    const { content } = req.body;
    const note = await Note.updateNote(req.params.id, content);
    return res.send(note.rows);
});

module.exports = router;
