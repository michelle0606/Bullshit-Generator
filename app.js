const express = require("express");
const port = 3000;
const app = express();
const generatorTalk = require("./generator");
const bodyParser = require("body-parser");

app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const option = req.body.job;
  const sentence = generatorTalk(option);
  res.render("index", { option: option, sentence: sentence });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
