// This didn’t work
// let socket = io('ws://localhost:3000');

// This did (found at https://stackoverflow.com/q/44628363)
let socket = io('http://localhost:3000', { transports : ['websocket'] });

function send() {
    const now = new Date()
    const timestamp = now.toISOString()

    socket.emit('message', timestamp);
}

button.onclick = send