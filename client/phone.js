const host = location.protocol + "//" + location.hostname;

// From https://stackoverflow.com/q/44628363
const socket = io(host + ":3000", {
  transports: ["websocket"],
});

function send() {
  const now = new Date();
  const timestamp = now.toISOString();

  socket.emit("message", timestamp);
}

button.onclick = send;
