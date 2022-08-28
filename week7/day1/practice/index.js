console.log("Hello World, I am in Node.");

const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});