const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const fruits = require("./models/fruits.js");

// Middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect("/fruits"); //send the user back to /fruits
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
