const express = require("express");
const { User } = require("./models");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Read all users
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

// Read a user by id
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  res.send(user);
});
// read user by name

app.get("/user_name/:name", async (req, res) => {
  const name = req.params.name;
  const user = await User.findOne({
    where: {
      firstName: name,
    },
  });
  res.send(user);
});

app.listen(port, () => console.log(`Listening on port ${port}`));