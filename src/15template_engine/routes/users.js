const { Router } = require("express");
const router = Router();

router.get("/UserName", (req, res) => {
  res.send("username route");
});

router.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("profile page");
});

module.exports = router;
