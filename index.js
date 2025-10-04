require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to my express application");
});

app.get("/twitter", (req, res) => {
  res.send("Rohan30L");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Welcome to Bitzloop</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
