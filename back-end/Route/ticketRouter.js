const express = require("express");
const ticketRouter = express.Router();

const user_token = require("../Meddelwar/userToken");
const ticketSchema = require("../Modul/ticketSchema");
require("dotenv").config();
//-------------------buy ticket ----------------------
ticketRouter.post("/:id", user_token, async (req, resp) => {
  try {
    const ticket = new ticketSchema({
      ...req.body,
      userTicketId: req.user._id,
      moviesTicketId: req.params.id,
    });
    //const token = jwt.sign({ _id: ticket._id }, process.env.orKey, {
    //expiresIn: "30s",
    //});
    await ticket.save();
    resp.status(200).send({ msg: "now you have your ticket", ticket });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "can not have a ticket" }] });
  }
});
//------------------- find user ticket---------------------------
ticketRouter.get("/userTicket", user_token, async (req, resp) => {
  try {
    const userTicket = await ticketSchema
      .find({ userTicketId: req.user._id })
      .populate("userTicketId");
    resp.status(200).send({ msg: "this is your ticket", userTicket });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "can not get your ticket" }] });
  }
});
//---------------- find movies ticket------------------------------
ticketRouter.get("/moviesTicket/:_id", async (req, resp) => {
  try {
    const moviesTicket = await ticketSchema
      .find({
        moviesTicketId: req.params._id,
      })
      .populate("moviesTicketId");
    resp.status(200).send({ msg: "this is your movies ticket", moviesTicket });
  } catch (error) {
    resp.status(400).send({ errors: [{ msg: "can not get your ticket" }] });
  }
});
//----------------------------find all the ticket---------------------------
ticketRouter.get("/", async (req, resp) => {
  try {
    const ticket = await ticketSchema.find();
    resp.status(200).send({ msg: "this is all ticket", ticket });
  } catch (error) {
    resp.status(400).send({ errors: [{ msg: "can not get all ticket" }] });
  }
});
//------------------romove ticket-----------------
ticketRouter.delete("/:_id", async (req, resp) => {
  try {
    const ticket = await ticketSchema.findByIdAndDelete(req.params._id);
    resp.status(200).send({ msg: "your ticket is delete", ticket });
  } catch (error) {
    resp.status(500).send({ errors: [{ msg: "we can't delete" }] });
  }
});
//------------------------------my ticket---------------------------
//ticketRouter.get("/myticket", ticket_token, (req, resp) => {
//resp.send(req.ticket);
//});
module.exports = ticketRouter;
