const express = require("express");
const app = express();
// const axios = require("axios");
const cors = require("cors");
// const path = require("path");
const port = 5000;
// const { apiConfig, requestConfig } = require("../config.js");

app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:${port}`,
    credentials: true,
  })
);

// app.use(function (req, res, end) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   end();
// });

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
