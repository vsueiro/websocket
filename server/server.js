const express = require('express');
const app = express();

// Might not be necessary
const cors = require('cors');
app.use(cors());

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log('message: ' + message);

        // Sends data to everyone
        io.emit('message', message);
    });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});