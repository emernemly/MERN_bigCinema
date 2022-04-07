const express = require("express");
require("dotenv").config();
const contactDB = require("./Config/config");
const addcinemaRoute = require("./Route/AddCinema");

const moviesRoute = require("./Route/moviesRoute");
const ticketRouter = require("./Route/ticketRouter");
const userRoute = require("./Route/UserRoute");
const MovieStream = require("./Route/MovieStream");
const streamRoute = require("./Route/StreamRoute");
const app = express();
app.use(express.json());
//-------------------for user-----------
app.use("/api/user", userRoute);
//----------------- for userCinema-----------
//app.use("/api/userCinema", userCinemaRoute);
//---------------for cinema----------------
app.use("/api/cinema", addcinemaRoute);
//-----------------for movies----------
app.use("/api/movies", moviesRoute);
//----------------for ticket----------
app.use("/api/ticket", ticketRouter);
app.use("/api", MovieStream);
app.use("/api/stream", streamRoute);
//------------deployment---------------

contactDB();
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
