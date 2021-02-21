const functions = require("firebase-functions");

let express = require("express");
const cors = require("cors");
// const http = require("http");
const routes = require("./routes/index.route");
// // const port = process.env.PORT || 4000;
let app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Soup Template Demo API!");
});

app.use(cors());

app.use("/", routes);

// const server = http.createServer(app);

// server.on("listening", function () {
//   console.log(`HTTP server listening at port ${port}`);
// });

// server.listen(port);

// module.exports = { app };

exports.app = functions.https.onRequest(app)