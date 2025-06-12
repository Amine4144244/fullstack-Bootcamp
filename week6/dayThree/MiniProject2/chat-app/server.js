const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Store active users and rooms
const users = {};
const rooms = {
    'general': { users: [] },
    'random': { users: [] },
    'tech': { users: [] }
};

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log('New user connected');
    
    // When a new user joins
    socket.on('join', ({ username, room }) => {
        // Add user to room
        socket.join(room);
        
        // Store user information
        users[socket.id] = { username, room };
        
        // Add user to room's user list
        if (!rooms[room]) {
            rooms[room] = { users: [] };
        }
        rooms[room].users.push({ id: socket.id, username });
        
        // Welcome message to user
        socket.emit('message', {
            user: 'ChatBot',
            text: `Welcome to the ${room} room, ${username}!`,
            time: new Date().toLocaleTimeString()
        });
        
        // Broadcast to room that a user has joined
        socket.broadcast.to(room).emit('message', {
            user: 'ChatBot',
            text: `${username} has joined the chat`,
            time: new Date().toLocaleTimeString()
        });
        
        // Send users and room info
        io.to(room).emit('roomData', {
            room,
            users: rooms[room].users
        });
    });
    
    // Listen for chat messages
    socket.on('sendMessage', (message) => {
        const user = users[socket.id];
        if (user) {
            io.to(user.room).emit('message', {
                user: user.username,
                text: message,
                time: new Date().toLocaleTimeString()
            });
        }
    });
    
    // Handle private messages
    socket.on('privateMessage', ({ recipient, message }) => {
        const sender = users[socket.id];
        const recipientSocket = Object.keys(users).find(
            key => users[key].username === recipient
        );
        
        if (recipientSocket && sender) {
            io.to(recipientSocket).emit('privateMessage', {
                sender: sender.username,
                text: message,
                time: new Date().toLocaleTimeString()
            });
            
            socket.emit('privateMessage', {
                sender: `You to ${recipient}`,
                text: message,
                time: new Date().toLocaleTimeString()
            });
        }
    });
    
    // When user disconnects
    socket.on('disconnect', () => {
        const user = users[socket.id];
        if (user) {
            // Remove user from room
            const room = user.room;
            rooms[room].users = rooms[room].users.filter(
                user => user.id !== socket.id
            );
            
            // Broadcast user left
            io.to(room).emit('message', {
                user: 'ChatBot',
                text: `${user.username} has left the chat`,
                time: new Date().toLocaleTimeString()
            });
            
            // Update room data
            io.to(room).emit('roomData', {
                room,
                users: rooms[room].users
            });
            
            // Remove user from users list
            delete users[socket.id];
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});