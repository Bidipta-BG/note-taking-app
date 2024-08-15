const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/note');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('joinNote', (noteId) => {
        socket.join(noteId);
    });

    socket.on('editNote', (noteId, content) => {
        io.to(noteId).emit('updateNote', content);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(5000, () => console.log('Server started on port 5000'));
