const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Andrew",
      age: 27,
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/weather", (req, res) => {
  res.send([{ forecast: "50F", location: "New York City" }]);
});

app.listen(3000, () => {
  console.log("Server is up on port");
});
