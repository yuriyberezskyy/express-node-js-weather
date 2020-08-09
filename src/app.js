const express = require("express");

const app = express();

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
  res.send("About page");
});

app.get("/weather", (req, res) => {
  res.send("Your Weather");
});

app.listen(3000, () => {
  console.log("Server is up on port");
});
