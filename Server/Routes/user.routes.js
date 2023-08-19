const auth = require("../Middleware/auth");
const express = require("express");
const router = express.Router();

router.post(
  "/Home",
  [auth.verify], // Middleware
  (req, res) => {
    // Route handler
    res.json({ message: "Protected route accessed successfully" });
  }
);

module.exports = router;
