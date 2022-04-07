const { body, validationResult } = require("express-validator");
exports.rgvalidation = [
  body("password", "should be at least 6 char").isLength({ min: 6 }),
  body("email", "not valide email").isEmail(),
];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
