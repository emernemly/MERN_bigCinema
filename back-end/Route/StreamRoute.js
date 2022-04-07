const express = require("express");
const { uploadmovie } = require("../Meddelwar/multterMovies");
const Streammovie = require("../Modul/Streammovie");
const streamRoute = express.Router();
streamRoute.post("/:_id", uploadmovie.single("movies"), async (req, resp) => {
  try {
    const movies = await Streammovie({
      ...req.body,
      moviesStreamId: req.params._id,
      movies: req.file.filename,
    });
    await movies.save();
    resp.status(200).send({ msg: "movie add secc...", movies });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "not finds" }] });
  }
});
//streamRoute.get("/", async (req, resp) => {
//try {
//const movies = await Streammovie.find();
//resp.status(200).send({ msg: "list of movies", movies });
//} catch (error) {
//resp.status(500).send({ errors: [{ msg: "list not found" }] });
//}
//});
streamRoute.get("/:_id", async (req, resp) => {
  try {
    const movies = await Streammovie.find({ moviesStreamId: req.params._id });
    resp.status(200).send({ msg: "list of movies", movies });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "list not found" }] });
  }
});

module.exports = streamRoute;
