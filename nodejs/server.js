const http = require('http');
const port = 3000;

const requesHandler = (request, response) => {
  response.end('Hello Node');
};

const server = http.createServer(requesHandler);

server.listen(port, (err) => {
  if (err) {
    return new Error(err.message);
  }

  console.log(`Server is listening on port ${port}`);
})