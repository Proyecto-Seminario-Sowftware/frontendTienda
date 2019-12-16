// importar express
const express = require("express");
const path = require("path");

// crear al app
app = express();

app.use(express.static(_dirname + "/dist"));
app.get("/.*/", function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

// Enviarle el puerto
const port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
