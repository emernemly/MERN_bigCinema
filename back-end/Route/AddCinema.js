const express = require("express");

const user_token = require("../Meddelwar/userToken");
const addcinemaRoute = express.Router();
const addCinemaShema = require("../Modul/AddCinemaSchema");

const { upload } = require("../Meddelwar/Multer");
require("dotenv").config();
//---------------------------- post new cinema  and find how posted---------------
addcinemaRoute.post(
  "/",
  user_token,
  upload.single("image"),
  async (req, resp) => {
    try {
      const cinema = new addCinemaShema({
        ...req.body,
        cinemaId: req.user._id,
        image: req.file.filename,
      });
      //const token = jwt.sign({ _id: cinema._id }, process.env.orKey);
      await cinema.save();
      resp.status(200).send({ msg: "cinema add secc...", cinema });
    } catch (error) {
      resp.status(500).send({ errors: [{ msg: "could not add" }] });
    }
  }
);
//---------------- get all cinema for watched by user-----------------
addcinemaRoute.get("/", user_token, async (req, resp) => {
  try {
    const allcinema = await addCinemaShema.find();
    resp.status(200).send({ msg: "list of cinema", allcinema });
  } catch (error) {
    resp
      .status(500)
      .send({ errors: [{ msg: "could not get list of cinema" }] });
  }
});
//----------get my cinema ----------------------------------------
addcinemaRoute.get("/myCinema", user_token, async (req, resp) => {
  try {
    const myCinema = await addCinemaShema
      .find({
        cinemaId: req.user._id,
      })
      .populate("cinemaId");
    resp.status(200).send({ msg: "list of my cinema", myCinema });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "could not get your list " }] });
  }
});
//--------------------delete cinema----------------
addcinemaRoute.delete("/:_id", user_token, async (req, resp) => {
  try {
    const cinema = await addCinemaShema.findByIdAndDelete(req.params._id);
    resp.status(200).send({ msg: "your cinema is delete", cinema });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "we can't delete" }] });
  }
});
//---------------------update cinema-------------------

addcinemaRoute.put(
  "/:_id",
  upload.single("image"),
  user_token,
  async (req, resp) => {
    try {
      const user = await addCinemaShema.findById(req.params._id);

      const cinema = await addCinemaShema.findByIdAndUpdate(req.params._id, {
        ...req.body,
        image: req.file ? req.file.filename : req.obj,
      });
      console.log(cinema.image);
      resp.status(200).send({ msg: "your cinema is update", cinema });
    } catch (error) {
      resp.status(500).send({ errors: [{ msg: "your cinema not update" }] });
    }
  }
);
//--------------------------find by id-------------------------
addcinemaRoute.get("/:_id", async (req, resp) => {
  try {
    const cinema = await addCinemaShema.findById(req.params._id);
    resp.status(200).send({ msg: "find secc....", cinema });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "your cinema not update" }] });
  }
});

module.exports = addcinemaRoute;
