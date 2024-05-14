const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  //query to database
  //validar datos
  //procesar datos
  res.send("listando productos");
});

app.post("/products", (req, res) => {
  res.send("creando productos");
});

app.put("/products", (req, res) => {
  res.send("actualizando productos");
});

app.post("/products", (req, res) => {
  res.send("creando productos");
});

app.delete("/products", (req, res) => {
  res.send("eliminando productos");
});

app.patch("/products", (req, res) => {
  res.send("actualizando una parte de los productos");
});

app.listen(3000);
console.log("Server listen on port", 3000);
//estos metodos vienen del cliente
