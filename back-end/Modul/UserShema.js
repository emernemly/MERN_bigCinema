const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user", "cinema"], default: "user" },
});
module.exports = mongoose.model("user", userSchema);
