import express from "express";
import * as cowsay from "cowsay";
const app = express();
const PORT = 3000;
app.use(express.json());
//routes
// routes usually will have it's http metho on it, ie "get"
// it will always include in this order
// a request and a response
console.log("outside the route");
app.get("/", (req, res) => {
  // inside of this function body
  console.log("inside the route");
  res.send("this is the home page");
});

app.get("/benji", (req, res) => {
  res.send("🦎");
});

app.post("/beer", (req, res) => {
  res.send("🍺");
});

app.post("/create_user", (req, res) => {
  console.log(req);
});

app.get("/silly_cow", (req, res) => {
  res.send(
    console.log(
      cowsay.say({
        text: "How do you mooo??",
        e: "pp",
        T: "U",
      })
    )
  );
});

app.post("/other_cow", (req, res) => {
  res.send(cowsay.think({ text: req.body.text, T: "U", e: "O O" }));
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
