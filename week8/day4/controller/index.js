const express = require("express");
const app = express();
const port = 3004;
const { Users, Sessions } = require("./models");
const models = require("./models");
const es6Renderer = require("express-es6-template-engine");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const store = new SequelizeStore({
  db: models.sequelize,
});
// middleware
app.engine("html", es6Renderer);
app.set("views", "views");
app.set("view engine", "html");
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
store.sync();

app.post("/login", async (req, res) => {
  const user = await Users.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  if (user) {
    req.session.user = user;
    res.json({
      message: "Login Success",
      user: user,
    });
  } else {
    res.json({
      message: "Login Failed",
    });
  }
});

const checkLogin = async (req, res, next) => {
  console.log(req.session.user);
  const sessionValid = await Sessions.findOne({
    where: {
      sid: req.session.id,
    },
  });

  if (sessionValid) {
    next();
  } else {
    res.json({
      message: "Login Failed",
    });
  }
};

app.post("/delete_all_secrets", checkLogin, async (req, res) => {
  res.send("You must be legit, we deleted everything");
});

app.get("/home", checkLogin, (req, res) => {
  res.render("index", { locals: { name: req.session.user.username } });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
