// Create 4 routes and map them to the respective html
// Listen to get request read the url and parse it and send the appropriate html using fs

// import http from "node:http";
// import fs from "node:fs";
// import url from "node:url";

const fs = require("fs");
const http = require("http");

let host = "localhost";
let port = "3000";

function handleRequest(req, res) {
  let currPath = req.url;
  res.setHeader("Content-Type", "text/html");
  if (currPath == "/") {
    fs.createReadStream("index.html").pipe(res);
  } else if (currPath == "/aboutme") {
    fs.createReadStream("aboutme.html").pipe(res);
  } else if (currPath == "/contactme") {
    fs.createReadStream("contactus.html").pipe(res);
  } else {
    fs.createReadStream("error404.html").pipe(res);
  }
  res.writeHead(200);
}

const server = http.createServer(handleRequest);

server.listen(port, host, () => {
  console.log("server is started at ", host, port);
});
