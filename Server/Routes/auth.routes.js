const auth = require("../Middleware/auth");
const express = require("express"); 
const router = express.Router();

router.use(function (req, res, next) {
    next();
});

router.post("/login", auth.login);
router.post("/register", auth.register);
router.post("/verify", auth.verify);
router.post("/verifyRole",[auth.verify], auth.verifyRole);


module.exports = router;
