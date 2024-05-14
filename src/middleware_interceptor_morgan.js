const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json()); //esto tambien equivale a un middleware
app.use(morgan("dev")); //esto es equivalente al middleware
// app.use((req, res, next) => {
//   console.log(`Ruta: ${req.url} Metodo: ${req.method}`);
//   next();
// });

app.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

app.use((req, res, next) => {
  if (req.query.login === "wil.fabri777@gmail.com") {
    next();
  } else {
    res.send("pagina no encontrada");
  }
});

app.get("/dashboard", (req, res) => {
  res.sendFile("img/middleware_II.png", { root: __dirname });
});

app.listen(3000);
console.log("Escuchando en el puerto", 3000);
