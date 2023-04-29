const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon");

//Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");
//
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// app.get("/pokemon", (req, res) => {
//   res.send({ pokemon });
// });
//Index
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon });
});
//Show
app.get("/pokemon/:id", (req, res) => {
  res.send(req.params.id);
});
//Listen
app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
