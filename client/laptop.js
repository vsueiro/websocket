// This didn’t work
// let socket = io('ws://localhost:3000');

// This did (found at https://stackoverflow.com/q/44628363)
// let socket = io('http://localhost:8080', { transports : ['websocket'] });

let socket = io('https://server.supertunnel.app/', { transports : ['websocket'] });

socket.on('message', show);

function show( message ) {
    output.textContent = message
}