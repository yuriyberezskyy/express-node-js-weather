const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, "../public")));
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Yuriy",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Yuriy",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Yuriy",
    helpText: "This is some helpful text.",
  });
});

app.get("/weather", (req, res) => {
  res.send([{ forecast: "50F", location: "New York City" }]);
});

app.listen(3000, () => {
  console.log("Server is up on port");
});
