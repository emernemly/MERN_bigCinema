const express = require("express");
const router = express.Router();
const fs = require("fs");
const Streammovie = require("../Modul/Streammovie");

router.get("/", function (req, res) {
  res.sendFile(__dirname + "/Movies.js");
});

router.get("/video/:_id", async (req, res) => {
  // Ensure there is a range given for the video
  const x = await Streammovie.findOne({ moviesStreamId: req.params._id });

  const range = req.headers.range;
  if (!range) {
    res.status(400).send("Requires Range header");
  }

  const videoPath = `./${x.movies}`;
  const videoSize = fs.statSync(videoPath).size;

  const CHUNK_SIZE = 5 * 10 ** 5;
  const start = Number(range.replace(/\D/g, "")); // 'bytes=6750208-' => 6750208
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create headers
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  // HTTP Status 206 for Partial Content
  res.writeHead(206, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
});
module.exports = router;
