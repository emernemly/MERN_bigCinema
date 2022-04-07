const express = require("express");

//const movies_Token = require("../Meddelwar/MoviesToken");
const { upload } = require("../Meddelwar/Multer");
const user_token = require("../Meddelwar/userToken");
const moviesSchema = require("../Modul/MoviesSchema");
const { uploadmovie } = require("../Meddelwar/multterMovies");
const Streammovie = require("../Modul/Streammovie");
const moviesRoute = express.Router();
require("dotenv").config();
//-------------------add movies---------------------------
moviesRoute.post(
  "/:_id",
  user_token,
  upload.fields([{ name: "image" }, { name: "movies" }]),
  async (req, resp) => {
    try {
      const movies = await moviesSchema({
        ...req.body,
        moviesId: req.params._id,
        image: req.files.image[0].filename,
      });

      //const token = jwt.sign({ _id: movies._id }, process.env.orKey);
      await movies.save();
      resp.status(200).send({ msg: "movie add secc...", movies });
    } catch (error) {
      resp.status(500).send({ errors: [{ msg: "can not add" }] });
    }
  }
);
//------------------------read movies----------------------
moviesRoute.get("/", user_token, async (req, resp) => {
  try {
    const movies = await moviesSchema.find();
    resp.status(200).send({ msg: "list of movies", movies });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "list not found" }] });
  }
});
//------------------------get my movies-------------------------
moviesRoute.get("/mymovies/:_id", async (req, resp) => {
  try {
    const movies = await moviesSchema
      .find({ moviesId: req.params._id })
      .populate("moviesId");

    resp.status(200).send({ msg: "list of my movies", movies });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "not found" }] });
  }
});

//---------------delete movies---------------------
moviesRoute.delete("/:_id", async (req, resp) => {
  try {
    const movies = await moviesSchema.findByIdAndDelete(req.params._id);
    resp.status(200).send({ msg: "movie is delete", movies });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "not delete" }] });
  }
});
//-----------------------update movies -----------------------
moviesRoute.put("/:_id", upload.single("image"), async (req, resp) => {
  try {
    const movie = await moviesSchema.findByIdAndUpdate(req.params._id, {
      ...req.body,
      image: req.file ? req.file.filename : req.obj,
    });
    resp.status(200).send({ msg: "movie is update", movie });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "not update" }] });
  }
});
moviesRoute.get("/:_id", user_token, async (req, resp) => {
  try {
    const movie = await moviesSchema.findById(req.params._id);
    resp.status(200).send({ msg: "find secc ", movie });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "not find" }] });
  }
});

module.exports = moviesRoute;
