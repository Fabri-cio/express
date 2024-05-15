const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("esta es tu pagina");
});

app.get("/about", (req, res) => {
  res.send("acerca de nosotros");
});

app.get("/weather", (req, res) => {
  res.send("esta lloviendo");
});

app.use((req, res) => {
  res.status(404).send("no se pudo encontrar tu pagina");
});

app.listen(3000);
console.log("servidor escuchanco en el puerto ", 3000);
