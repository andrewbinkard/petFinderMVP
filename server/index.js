const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const port = 5000;
// const { apiConfig, requestConfig } = require("../config.js");

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/../react-client/dist"));

// const config = {
//   headers: { Authorization: `Bearer ${apiconfig.token}` },
// };

// app.get("/animals", (req, res) => {
//   axios
//     .get("https://api.petfinder.com/v2/animals?type=dog&limit=1", config)
//     .then(({ data, pagination }) => console.log("SUCCESS! ", data, pagination))
//     .catch((err) => console.log("FAILURE! ", err));
// });

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
