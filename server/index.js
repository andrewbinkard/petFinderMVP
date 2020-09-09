const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const port = 4000;
const apiconfig = require("../apiconfig.js");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database-mysql');
// const items = require('../database-mongo');

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/../react-client/dist"));

// const config = {
//   headers: { Authorization: `Bearer ${apiconfig.token}` },
// };

// axios
//   .get("https://api.petfinder.com/v2/animals?type=dog&limit=1", config)
//   .then((response) => console.log("SUCCESS! ", response))
//   .catch((err) => console.log("FAILURE! ", err));
// app.get("/:type", (req, res) => {
//   axios
//     .get("https://api.petfinder.com/vs/animals")
//     .then((response) => console.log("Success! ", response))
//     .catch((err) => console.log("FAILURE! ", err));
// });

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
