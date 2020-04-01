var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"},
  {name: "Granite Hill", image: "https://images.unsplash.com/photo-1520824071669-892f70d8a23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=997&q=80"},
  {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
]

app.get("/", function (req, res) {
  res.render("landing");
})

app.get("/campgrounds", function (req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
})

app.get("/campgrounds/new", function (req, res) {
  res.render("new");
})

app.listen(port, function() {
  console.log("it is alive");
})