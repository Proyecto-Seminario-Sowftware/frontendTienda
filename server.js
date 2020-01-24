// importar express
const express = require("express");
const path = require("path");

// crear al app
app = express();

app.use(express.static(_dirname + "/dist"));
app.get("/.*/", function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

const host = "0.0.0.0";

// Enviarle el puerto
const port = process.env.PORT || host;
app.listen(port);
console.log("server started " + port);
