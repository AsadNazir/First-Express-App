const auth = require("../Middleware/auth");
const express = require("express");
const router = express.Router();

const locationController = require("../Controller/location.controller");

router.get('/allLocation', [auth.verify], locationController.getAllLocations);
router.get('/getLocation/:id', [auth.verify], locationController.getLocationById);


module.exports= router;