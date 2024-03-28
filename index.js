const { request } = require("express");

const app = require("express")();
const HOSTNAME = "0.0.0.0";
const PORT = 8080;

app.listen(PORT, () => console.log(`Alive on http://${HOSTNAME}:${PORT}/`));

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World! Tag V1\n");
});

app.get("/hello", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello within hello!\n");
});
