var path = require("path");
var SRC_DIR = path.join(__dirname, "/react-client/src");
var DIST_DIR = path.join(__dirname, "/react-client/dist");

// module.exports = {
//   entry: `${SRC_DIR}/Index.jsx`,
//   output: {
//     filename: "bundle.js",
//     path: DIST_DIR,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["react", "es2015"],
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
// };

module.exports = {
  entry: `${SRC_DIR}/Index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"],
        },
      },
    ],
  },
};
