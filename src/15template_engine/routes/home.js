const { Router } = require("express"); //tambien puede ser express en vez de {Router}

const router = Router(); // y en ves de express.Router

router.all("/about", (req, res) => {
  const title = "Pagina con express de william";

  res.render("index", { title }); //es lo mismo{title: title }
});

router.get("/dashboard", (req, res) => {
  res.send("dashboard");
});

module.exports = router;
