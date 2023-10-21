const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

// const staticpath = path.join(__dirname, "../main");
const tempath = path.join(__dirname, "../templetes/views");
const parpath = path.join(__dirname, "../templetes/partials");
//seting view engine :
app.set("view engine", "hbs");
app.set("views", tempath);
hbs.registerPartials(parpath);

// app.use(express.static(staticpath));

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("*", (req, res) => {
  res.render("404", {
    errorcomment: "oops page could not be found",
  });
});

app.listen(8000, () => {
  console.log("listening to post at 8000");
});
