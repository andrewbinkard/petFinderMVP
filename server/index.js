const express = require("express");
const bodyParser = require("body-parser");
const port = 4000;
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database-mysql');
// const items = require('../database-mongo');

const app = express();

// UNCOMMENT FOR REACT
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
