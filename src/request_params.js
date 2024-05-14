const express = require("express");
const app = express();

app.get("/hello/:username", (req, res) => {
  console.log(typeof req.params.username);
  res.send(`Hello ${req.params.username.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "william") {
    return res.sendFile("./daron.jpg", { root: __dirname });
  }

  res.send("el usuario no tiene acceso");
});

app.get("/name/:nombre/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`);
});

app.listen(3000);
console.log(`Servidor escuchando en el puerto ${3000}`);
