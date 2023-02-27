const express = require("express");
const app = express();

// Might not be necessary
const cors = require("cors");
app.use(cors());

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log("message: " + message);

    // Sends data to everyone
    io.emit("message", message);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
