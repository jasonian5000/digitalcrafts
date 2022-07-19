import express from "express";
import es6Renderer from "express-es6-template-engine";

const app = express();
const PORT = 3001;

// middleware app.use()

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
// tells html where to find local files
app.use(express.static("public"))

app.get("/", (req, res) => {
  // res.send("Hello from Express!")
  const user = { name: "Jason" };
  res.render("home", {
    locals: { user, teacher: "Joe", students: ["Amanda", "Carlos"] },
  });
});

app.get("/joe", (req, res) => {
  res.render("joe");
});

app.post("/home", (req, res) => {
  res.send("Hello again from Express!");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
