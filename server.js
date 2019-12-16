// importar express
var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");

// crear al app
app = express();

// Hacer publica la carpeta  diss
app.use(serveStatic(__dirname + "/dist"));

// Enviarle el puerto
var port = process.env.PORT || 5000;
app.listen(port);
console.log("server started " + port);
