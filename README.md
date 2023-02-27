# Local WebSocket

This repo is a starting point for creating a local server that talks to devices on the same Wi-Fi, like having a web page on your phone send data to a web page on your laptop.

## How to Use

### Overview

- Run a [Node](https://nodejs.org/en/) server on `_server` directory to handle WebSocket connections (using [Express](https://expressjs.com/) and [Socket.IO](https://socket.io/))
- Run a [http-server](https://www.npmjs.com/package/http-server) (or similar) on `client` directory to have a web pages sending user data to one another

### Instructions

ℹ️ _Note: these instructions work for me, using a MacBook and an iPhone._

1. Open a Terminal window
2. Go to `_server` directory (using `cd` command)
3. Run command `node server.js`

This should start your Node Server at [http://localhost:3000]().
This is responsible for receiving messages from web pages and emitting messages to web pages (loaded from devices on the same Wi-Fi).

Now, let’s start the web server:

4. Open another Terminal window
5. Go to `client` directory (using `cd` command)
6. Run command `http-server ./`

This should start your Web Server at [http://localhost:8080]().
This is responsible for making your web page (HTML, CSS, JS and other files) available through a browser.

7. On your laptop, open a browser (like Firefox or Chrome)
8. Go to [`http://localhost:8080`]()
9. Open the [`http://localhost:8080/laptop.html`]() page in one tab
10. Open the [`http://localhost:8080/phone.html`]() page in another tab

Now, when you click the “Send data” button on the `phone.html` page, a timestamp should appear on the `laptop.html`.

**Yay! It’s done!** ✨

But… We can make this fancier. Try opening `phone.html` on a… well… phone. Here is how:

11. Find your local IP address ([this tutorial](https://www.avg.com/en/signal/find-ip-address#mac) seems good)
12. On your phone open a browser (like Safari or Chrome)
13. Go to [http://YOUR-IP-ADDRESS-HERE:8080/]
14. Finally, open `phone.html` by clicking the link.

Now, every time your click the “Send data” button on your phone, the `laptop.html` page on your laptop should be updated.
