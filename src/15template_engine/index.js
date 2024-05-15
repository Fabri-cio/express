const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("ejs"); //es suficiente con requerir

const app = express();

const homeRouter = require("./routes/home");
const userRouter = require("./routes/users");

//settings
app.set("case sensitive routing", true);
app.set("appName", "Express Course");
app.set("port", 4000);

//settings ejs
app.set("view engine", "ejs"); //motor de plantillas
app.set("views", path.join(__dirname, "views")); //ejs ya sabe donde encontrar estos archivos requerido por el modulo de plantillas

//middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use(homeRouter);
app.use(userRouter);
//routes

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} listen to ${app.get("port")}`);
