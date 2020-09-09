const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const port = 4000;
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database-mysql');
// const items = require('../database-mongo');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/items", function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
