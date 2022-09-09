require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const PORT = 3001;
app.use(express.json());

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    next()
  })
  req.user = user;
};

app.get("/userData", authenticateToken, (req, res) => {
  res.json({ name: "secretAgent Amanda" });
});

app.post("/login", (req, res) => {
  const user = {name: req.body.username}
  jwt.sign(user, process.env.ACCESS_TOKEN)
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: "30s"})
  console.log(token)
  res.send({ accessToken: token})
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
