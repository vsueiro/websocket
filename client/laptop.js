const host = location.protocol + "//" + location.hostname;

// From https://stackoverflow.com/q/44628363
const socket = io(host + ":3000", {
  transports: ["websocket"],
});

function show(message) {
  output.textContent = message;
}

socket.on("message", show);
