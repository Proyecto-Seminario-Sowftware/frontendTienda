// importar express
const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");

// crear al app
app = express();

app.use("/", serverStatic(path.join(__dirname, "/dist")));

const port = process.env.PORT || 8080;
app.listen(port);

console.log("Escuchando en el puerto " + port);
