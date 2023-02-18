const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write(`<h1> When you write JavaScript code in your text editor, that code cannot perform any task unless you execute (or run) it. And to run your code, you need a runtime environment.Browsers like Chrome and Firefox have runtime environments. That is why they can run JavaScript code. Before Node.js was created, JavaScript could only run in a browser. And it was used to build only front-end applications.Node.js provides a runtime environment outside of the browser. It's also built on the Chrome V8 JavaScript engine. This makes it possible to build back-end applications using the same JavaScript programming language you may be familiar with.</h1>`)
        res.end();
    }

    if(req.url === '/api') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

//Listener or handler
//socket class
// server.on('connection', (socket) => {
//     console.log('Newconnection')
// })

server.listen(3000);

console.log('Listening on port 3000')

//Everytime there is new connection
//Before registering we will listen using on