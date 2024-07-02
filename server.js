const http = require('http');  // import the http module which allows us to create an HTTP server

const server = http.createServer((req, res) => { // create the server using http.createServer and define how it should handle different routes
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type' : 'text/html'}); // set the response header to 200 OK and content type to text/html
        res.end('<h1>Welcome to the Home Page!<h1>');  // sends an HTML response to display on the webpage
    } else if(req.url === '/api') { // checks if the request (req) URL is /api.
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Hello from the API!'}));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end('404 Not Found'); // If the request URL is anything else, this message will appear
    }
});

server.listen(3000, () => { // Start the server and listen on port 3000.
    console.log('Server is running at http://localhost:3000/');
});


// Lines 3-6
// Request to (URL = '/'):
// Client: Sends a request to the home page.
// Server: Receives the request, checks the URL, and responds with an HTML message.
// Response: "Welcome to the Home Page!"

//Lines 7-9
// Request to /api:
// Client: Sends a request to the /api route.
// Server: Receives the request, checks the URL, and responds with a JSON object.
// Response: {"message": "Hello from the API!"}

// JSON.'stringify' method converts a JavaScript object or value into a JSON string
// 'writeHead' is a method used in Node.js to set the status code and headers of the HTTP response.
