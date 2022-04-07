const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  userTicketId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  moviesTicketId: { type: mongoose.Schema.Types.ObjectId, ref: "movies" },
});
module.exports = mongoose.model("ticket", ticketSchema);
