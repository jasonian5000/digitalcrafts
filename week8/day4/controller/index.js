const express = require("express");
const app = express();
const cors = require("cors");
const usersRoutes = require("./routes/users");
const es6Renderer = require("express-es6-template-engine");
const PORT = 3001;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { Users } = require("../sequelize/models")
//middleware

app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 2592000000,
    },
  })
);

app.use(express.static("public"));
app.engine("html", es6Renderer);
app.set("views", "./public/views");
app.set("view engine", "html");
app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
//

app.post("/login", async (req,res) => {
    const user = await usersRoutes.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    res.send("Nailed it")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
