const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require("./user")
const restaurantsRoutes = require("./restaurants")
const es6Renderer = require("express-es6-template-engine")

app.use(express.static("public"))
app.engine("html", es6Renderer)
app.set("views", "./public/views")
app.set("view engine", "html")

app.use(express.json())
app.use("/users", userRoutes)
app.use("/restaurants", restaurantsRoutes)

app.get("/", function (req, res) {
    res.render("index")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
