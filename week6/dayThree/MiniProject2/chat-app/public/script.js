document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the login page or chat page
    if (document.getElementById('join-form')) {
        setupLoginPage();
    } else if (document.getElementById('messages')) {
        setupChatPage();
    }
});

function setupLoginPage() {
    const joinForm = document.getElementById('join-form');
    
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const room = document.getElementById('room').value;
        
        if (username && room) {
            // Store username and room in session storage
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('room', room);
            
            // Redirect to chat page
            window.location.href = '/chat';
        }
    });
}

function setupChatPage() {
    // Get username and room from session storage
    const username = sessionStorage.getItem('username');
    const room = sessionStorage.getItem('room');
    
    if (!username || !room) {
        window.location.href = '/';
        return;
    }
    
    // Connect to Socket.io
    const socket = io();
    
    // DOM Elements
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const usersList = document.getElementById('users-list');
    const roomName = document.getElementById('room-name');
    const leaveButton = document.getElementById('leave-room');
    const privateRecipient = document.getElementById('private-recipient');
    const privateMessageInput = document.getElementById('private-message');
    const sendPrivateButton = document.getElementById('send-private');
    
    // Set room name
    roomName.textContent = `Room: ${room.charAt(0).toUpperCase() + room.slice(1)}`;
    
    // Join chat room
    socket.emit('join', { username, room });
    
    // Send message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            socket.emit('sendMessage', message);
            messageInput.value = '';
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Send private message
    function sendPrivateMessage() {
        const recipient = privateRecipient.value;
        const message = privateMessageInput.value.trim();
        
        if (recipient && message) {
            socket.emit('privateMessage', { recipient, message });
            privateMessageInput.value = '';
        }
    }
    
    sendPrivateButton.addEventListener('click', sendPrivateMessage);
    
    privateMessageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendPrivateMessage();
        }
    });
    
    // Leave room
    leaveButton.addEventListener('click', () => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('room');
        window.location.href = '/';
    });
    
    // Listen for messages
    socket.on('message', (message) => {
        displayMessage(message, false);
    });
    
    // Listen for private messages
    socket.on('privateMessage', (message) => {
        displayMessage(message, true);
        showNotification(`New private message from ${message.sender}`);
    });
    
    // Update users list
    socket.on('roomData', ({ room, users }) => {
        usersList.innerHTML = '';
        privateRecipient.innerHTML = '<option value="">Select user</option>';
        
        users.forEach(user => {
            if (user.username !== username) {
                const li = document.createElement('li');
                li.textContent = user.username;
                usersList.appendChild(li);
                
                // Add to private recipient dropdown
                const option = document.createElement('option');
                option.value = user.username;
                option.textContent = user.username;
                privateRecipient.appendChild(option);
            }
        });
    });
    
    // Display message in chat
    function displayMessage(message, isPrivate) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (isPrivate) messageDiv.classList.add('private-message');
        
        const metaDiv = document.createElement('div');
        metaDiv.classList.add('meta');
        metaDiv.innerHTML = `
            <span class="user">${message.user || message.sender}</span>
            <span class="time">${message.time}</span>
        `;
        
        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.textContent = message.text;
        
        messageDiv.appendChild(metaDiv);
        messageDiv.appendChild(textDiv);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Focus on input when page loads
    messageInput.focus();
}