const express = require("express");
var crypto = require('crypto')
const app = express();
const secret = 'secret'
const string = 'string'

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/signMessage", (req, res) => {
  // XFJTU1WS3Hmd0r8lZEXEW+MNqDVjqBn9hL3+xY7t/Dk=
  res.send(crypto.createHmac('SHA256', secret).update(string).digest('base64'));
});

app.post("/signature", (req, res) => {
  signature
});

app.get("/verify", (req, res) => {

  const data = JSON.parse(req);
  res.send(data);
});

app.listen(8000, () => {
  console.log("Running on port 8000.");
});
