const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end('<h1>Welcome to the Home Page!<h1>');
    } else if(req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Hello from the API!'}));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});