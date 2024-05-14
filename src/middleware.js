const express = require("express");
const app = express();

//tengo una funcion intermedia que mostrara las peticiones que lleguen
//osea que el middleware es un puente
//es cuando el browser hace una peticion -> y hay una funcion intermedia ejemplo(logger) entre la peticion y la ruta que que queremos osea /about
//en si el browser hace una peticion a express
// eso es lo que es el middleware ese puente o esa funcion por donde entra cada peticion del usuario
app.use((req, res, next) => {
  console.log(`Ruta: ${req.url} Metodo: ${req.method}`);
  next();
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

app.listen(3000);
console.log("Escuchando en el puerto", 3000);
