const express = require("express");
const app = express();

app.get("/archivo", (req, res) => {
  res.sendFile("./daron.jpg", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    //pa
    name: "william",
    lastname: "tito",
    age: 31,
    address: {
      city: "la paz",
      avenue: "llojeta",
    },
  });
});

//CODIGOS DE ESTADO
// statusCode 204 todo fue bien pero no te voy a devolver nada (solo manda el numero 204)
// statusCode 200 todo fue bien pero te voy a mandar datos
// statusCode 304 almacena los datos en la memoria cache para no hacer el mismo proceso pero todo esta bien

app.get("/isAlive", (req, res) => {
  res.sendStatus(204); //solo enviamos un codigo de estado
});

app.listen(3000);
console.log("server on port", 3000);
