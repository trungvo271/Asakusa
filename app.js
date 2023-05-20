const http = require('http');
const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('my first js app');
});

server.listen(port, hostname, () => {
    console.log(`server running att ${hostname}:${port}`);
});

