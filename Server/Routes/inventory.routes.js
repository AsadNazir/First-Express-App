const auth = require("../Middleware/auth");
const express = require("express");
const router = express.Router();

const inventoryController = require("../Controller/inevntory.controller");


//BASIC CRUD
router.get('/allItems', [auth.verify], inventoryController.getAllItems);
router.get('/getItem/:id', [auth.verify], inventoryController.getItemById);
router.post('/addItem', [auth.verify, auth.isAdministrator], inventoryController.addItem);
router.delete('/deleteItem/:id', [auth.verify, auth.isAdministrator], inventoryController.deleteItemById);

module.exports = router;
