const express = require("express");
const app = express();

app.get("/search/:username", (req, res) => {
  console.log(req.query);
  if (req.query.q === "javascript books") {
    res.send("lista de libros javaScript");
  } else {
    res.send("pagina normal");
  }
});

app.listen(3000);
console.log(`Puerto escuchando en el puerto ${3000}`);

//http://localhost:3000/search/william?q=20
// { q: '20' }

//http://localhost:3000/search/william?q=20&q=40
//{ q: [ '20', '40' ] }

//rick and morty api
// https://rickandmortyapi.com/api/character?page=2
// el page nos dice que muesra los primeros 20 personajes
