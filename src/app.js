const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Yuriy",
  });
});
// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "Andrew",
//       age: 27,
//     },
//   ]);
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About page</h1>");
// });

app.get("/about", (req, res) => {
  res.render("about", {
    name: "Yuriy",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    name: "Yuriy",
  });
});

app.get("/weather", (req, res) => {
  res.send([{ forecast: "50F", location: "New York City" }]);
});

app.listen(3000, () => {
  console.log("Server is up on port");
});
