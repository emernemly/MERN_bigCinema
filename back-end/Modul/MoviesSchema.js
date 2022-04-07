const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
  moviesName: { type: String, required: true },
  image: { type: String },
  region: { type: String },
  category: { type: String },
  description: { type: String },
  timeMovies: { type: String },
  rating: { type: Number },
  moviesId: { type: mongoose.Schema.Types.ObjectId, ref: "addCinema" },

  obj: { type: String },
});
module.exports = mongoose.model("movies", moviesSchema);
