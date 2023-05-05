require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const Pokemon = require("./models/pokemon");
const { connect, connection } = require("mongoose");

//Database Connection
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("connected to Mongo");
});
//Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");
app.use(express.urlencoded({ extented: false }));
//
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

// app.get("/pokemon", (req, res) => {
//   res.send({ pokemon });
// });
//Index
app.get("/pokemon", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.find({});
    res.render("Index", { pokemon: foundPokemon });
  } catch (err) {
    res.status(400).send(err);
  }
});
//New
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});
//Create
app.post("/pokemon/create", async (req, res) => {
  try {
    await Pokemon.create(req.body);
    res.redirect("/pokemon");
  } catch (err) {
    res.status(400).send(err);
  }
});
//Show
app.get("/pokemon/:id", async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render("./Show", {
      pokemon: foundPokemon,
    });
  } catch (err) {
    res.status(400).send(err);
  }

  // res.send(req.params.id);
});

//Listen
app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
