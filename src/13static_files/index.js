const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(express.json()); //middleware
app.use(morgan("dev")); //middleware

//este es un ejemplo de que tenemos que ponerlo al principio si queremos que funcione sin public
app.get("/note.txt", (req, res) => {
  res.send("este no es un archivo");
});

app.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

// app.use((req, res, next) => {
//   if (req.query.login === "wil.fabri777@gmail.com") {
//     next();
//   } else {
//     res.send("pagina no encontrada");
//   }
// });

app.get("/dashboard", (req, res) => {
  res.sendFile("img/middleware_II.png", { root: __dirname });
});

//ruta absoluta del documento
console.log(__dirname);

//siempre poner al final el static
//nota: es lo mismo static que public
//ponemos la carpeta en src y el express static no encontrara el directorio
//es por eso que concatenamos con path join __dinname y public
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(3000);
console.log("Escuchando en el puerto", 3000);
