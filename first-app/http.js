const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello There!');
        res.end();
    }

    // If you want to build backend server on web or mobile application, we need to handle various route here.
    if (req.url === '/api/courses') {
      res.write(JSON.stringify([1, 2, 3]));
      res.end();
    }
});

// server.on('connection', (socket) => {
  //  console.log('New connection...');
// });

server.listen(3000);

console.log('Listening on port 3000...');