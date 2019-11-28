// Importar express
const express = require("express");
const path = require("path");
const bodyParse = require("body-parser");
const routes = require("./routes/index");

// Creacion de la app
const app = express();

app.use(express.static(path.join(__dirname, "public")));
// Habilitar body-parse
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
// Implementar ruta
app.use("/", routes());

// Puerto de conexion
app.listen(7000, () => {
  console.log("Escuchando en el puerto 7000");
});
