const mongoose = require("mongoose");
require("dotenv").config();

const contactDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("server is connect with DB");
  } catch (error) {
    console.log(error);
  }
};
module.exports = contactDB;
