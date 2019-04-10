const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;
const app = express();
const generatorTalk = require("./generator");
const bodyParser = require("body-parser");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const option = req.body.job;
  console.log(option);
  const sentence = generatorTalk(option);
  res.render("index", { option: option, sentence: sentence });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
