const mongoose = require("mongoose");
const streamSchima = new mongoose.Schema({
  movies: { type: String },
  moviesStreamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movies",
  },
});
module.exports = mongoose.model("stream", streamSchima);
