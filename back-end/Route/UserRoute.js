const express = require("express");
const userRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../Modul/UserShema");
const { rgvalidation, validation } = require("../Meddelwar/Validation");
const user_token = require("../Meddelwar/userToken");
require("dotenv").config();
//--------------user sign UP-------------------
userRoute.post("/signUP", rgvalidation, validation, async (req, resp) => {
  const { user_name, email, password, role } = req.body;
  try {
    const user = new userSchema(req.body);
    const found = await userSchema.findOne({ email });
    if (found) {
      return resp.status(400).send({ errors: [{ msg: "user already exist" }] });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    user.password = hash;
    const token = jwt.sign({ _id: user._id }, process.env.orKey);
    await user.save();
    resp.status(200).send({ msg: "add secc...", user, token });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "could not register" }] });
  }
});
//------------------user sign IN ---------
userRoute.post("/signIN", async (req, resp) => {
  const { user_name, email, password, role } = req.body;
  try {
    const user = await userSchema.findOne({ email });
    if (user) {
      const match = bcrypt.compareSync(password, user.password);
      if (!match) {
        return resp.status(400).send({ errors: [{ msg: "bad credentials" }] });
      }
      const token = jwt.sign({ _id: user._id }, process.env.orKey);
      resp.status(200).send({ msg: "login secc...", user, token });
    } else {
      return resp.status(400).send({ errors: [{ msg: "bad credentials" }] });
    }
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: " sorry could not signIN" }] });
  }
});
//------------------------- user token verify---------------------------
userRoute.get("/myUser", user_token, (req, resp) => {
  resp.send(req.user);
});
module.exports = userRoute;
