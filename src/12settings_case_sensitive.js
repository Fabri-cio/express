const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

//lo que estamos haciendo es reconfigurar express
//settings poner siempre antes de los middlewares pero no pasan por aqui solo se cargan
app.set("case sensitive routing", true); //sirve para respetar la url
app.set("appName", "Express Course"); //asignamos valor a los nombres
app.set("port", 4000); //

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/UserName", (req, res) => {
  //aqui se va a respetar las mayusculas del las urls
  res.send("username route");
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

console.log(__dirname);

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} listen to ${app.get("port")}`);
