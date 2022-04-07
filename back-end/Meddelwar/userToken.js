const jwt = require("jsonwebtoken");
const userSchema = require("../Modul/UserShema");
require("dotenv").config();
const user_token = async (req, resp, next) => {
  const token = req.headers["authentication"];
  try {
    if (!token) {
      return resp
        .status(400)
        .send({ errors: [{ msg: "your not authorized" }] });
    }
    const decoded = jwt.verify(token, process.env.orKey);
    const user = await userSchema.findById(decoded._id);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = user_token;
