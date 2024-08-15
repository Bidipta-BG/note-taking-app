import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io.connect('http://localhost:5000');

const NotesPage = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await axios.get('http://localhost:5000/api/notes', {
                headers: { 'x-auth-token': localStorage.getItem('token') }
            });
            setNotes(response.data);
        };

        fetchNotes();
    }, []);

    const handleEditNote = (id, content) => {
        setSelectedNote({ id, content });
        socket.emit('joinNote', id);
    };

    const handleNoteChange = (content) => {
        setSelectedNote({ ...selectedNote, content });
        socket.emit('editNote', selectedNote.id, content);
    };

    useEffect(() => {
        socket.on('updateNote', (content) => {
            setSelectedNote({ ...selectedNote, content });
        });
    }, []);

    return (
        <div>
            <div>
                {notes.map((note) => (
                    <div key={note.id} onClick={() => handleEditNote(note.id, note.content)}>
                        {note.title}
                    </div>
                ))}
            </div>
            {selectedNote && (
                <div>
                    <textarea
                        value={selectedNote.content}
                        onChange={(e) => handleNoteChange(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
};

export default NotesPage;
