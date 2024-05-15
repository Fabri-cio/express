const { Router, response } = require("express"); //tambien puede ser express en vez de {Router}
const axios = require("axios");

const router = Router(); // y en ves de express.Router

router.get("/", (req, res) => {
  let isActive = true;

  const users = [
    {
      id: 1,
      name: "william",
      lastName: "vargas",
    },
    {
      id: 2,
      name: "fabricio",
      lastName: "vargas",
    },
  ];

  res.render("index", {
    title: "index page",
    isActive: isActive, // 17 sintaxis
    users: users, // 17 sintaxis
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// 18 Async code
router.get("/posts", async (req, res) => {
  const response = await axios.get(
    //axios es igula que fetch
    "https://jsonplaceholder.typicode.com/posts"
  ); //aqui ira la direccion del otro servidor
  //el servidor hara la peticion a otro servidor con axios o puede ser fetch el otro servidor respondera y ejs los convertira en un archivo html y lo mandara como index.html

  console.log(response); //en la consola hay un arreglo grande que es data que contien los 100 registros

  res.render("posts", { posts: response.data }); // 18 aqui estan los 100 registros
});

module.exports = router;
