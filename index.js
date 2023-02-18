const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('<h1>Welcome to first node handson</h1>')
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