const { request } = require("express");

const app = require("express")();
const HOSTNAME = "0.0.0.0";
const PORT = 8080;

app.listen(PORT, () => console.log(`Alive on http://${HOSTNAME}:${PORT}/`));

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World! Tag Argo Test Hello World v 99\n");
});

app.get("/hello", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello within hello!\n");
});

app.get("/xss", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<p>${req.query.q}</p>`);
});
