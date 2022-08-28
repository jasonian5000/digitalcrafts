const express = require("express");
const { users } = require("../../../sequelize/models");
const router = express.Router();

router.post("/login", async (req, res) => {
  res.send("login");
});

module.exports = router;