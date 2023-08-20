const auth = require("../Middleware/auth");
const express = require("express");
const router = express.Router();

const categoryController = require("../Controller/category.controller");

router.get('/allCategory', [auth.verify], categoryController.getAllCategories);
router.get('/getCategory/:id', [auth.verify], categoryController.getCategoryById);


module.exports= router;