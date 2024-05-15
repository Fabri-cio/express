const express = require("express");
const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

app.listen(3000);
console.log(`Escuchando en el puerto ${3000}`);

//un domento http request puede tener
// POST /api/usuarios/nuevo HTTP/1.1
// Host: ejemplo.com
// Content-Type: application/json
// Content-Length: 56

// {
//   "nombre": "Juan",
//   "apellido": "Pérez",
//   "correo": "juan@example.com"
// }

//un titulo en point al final
//Línea de solicitud: POST /api/usuarios/nuevo HTTP/1.1
// Método HTTP: POST
// Endpoint: /api/usuarios/nuevo
//Versión del protocolo HTTP: HTTP/1.1

//una cabesera
// Encabezados:
// Host: ejemplo.com: Indica el nombre de dominio del servidor al que se envía la solicitud.
// Content-Type: application/json: Indica el tipo de contenido del cuerpo de la solicitud, en este caso, un objeto JSON.
// Content-Length: 56: Indica la longitud del cuerpo de la solicitud en bytes.

//y un cuerpo
// {
//   "nombre": "Juan",
//   "apellido": "Pérez",
//   "correo": "juan@example.com"
// }
