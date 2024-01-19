const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html"); // Use setHeader instead of SetHeader
  res.end("<h1>this prabin</h1><p>this dsbjvxsxgdsjxds</p>");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
