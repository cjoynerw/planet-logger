const express = require("express");
const app = express();

const fruits = require("./models/fruits.js");

app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/fruits/:index", function (req, res) {
  res.render("show.ejs", {
    //second param must be an object
    fruit: fruits[req.params.index], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.index]
  });
});

app.listen(3000, () => {
  console.log(`I am listening`);
});
