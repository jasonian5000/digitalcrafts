const express = require("express")
const app = express();
const cors = require("cors")
const petsRoutes = require("./routes/pets")
const es6Renderer = require("express-es6-template-engine")
const PORT = 3001;
//middleware

app.use(express.static("public"))
app.engine("html", es6Renderer)
app.set("views", "./public/views")
app.set("view engine", "html")

app.use(express.json())
app.use(cors())
app.use("/pets", petsRoutes)
//
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
