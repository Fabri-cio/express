const { Router } = require("express");
const router = Router();

router.get("/users", (req, res) => {
  console.log(req.body);
  res.send("profile page");
});

module.exports = router;
