const mongoose = require("mongoose");
const addCinemaShema = new mongoose.Schema({
  cinema_Name: { type: String, required: true },
  image: { type: String, required: true },
  countries: { type: String },
  cinemaId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  rate: { type: Number },
  obj: { type: String },
});
module.exports = mongoose.model("addCinema", addCinemaShema);
