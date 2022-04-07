const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../back-end");
  },
  filename: function (req, file, cb) {
    {
      cb(null, file.originalname);
    }
  },
});
exports.uploadmovie = multer({ storage: storage });
