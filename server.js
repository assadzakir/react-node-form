const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json()); // application/json

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  console.log(req.body);
  res.send(req.body);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// mongoose
//   .connect(
//     "mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/messages?retryWrites=true"
//   )
//   .then((result) => {
//     app.listen(PORT, console.log(`Server started on port ${PORT}`));
//   })
//   .catch((err) => console.log(err));
