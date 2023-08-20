const inventory = require("../Model/inventory.model");
const category = require("../Model/category.model");
const location = require("../Model/location.model");

const getAllItems = async (req, res) => {
  try {
    const items = await inventory.getAllItems();
    res.status(200).json({ Error: false, Message: "Success", Items: items });
  } catch (err) {
    res.status(500).json({ Error: true, Message: err });
  }
};

const addItem = async (req, res) => {
  try {
    const cat = await category.getCategoryById(req.body.item_category_id);
    const loc = await location.getLocationById(req.body.item_location_id);

    if (cat.length === 0 || loc.length === 0) {
      res
        .status(404)
        .json({ Error: true, Message: "Category or Location not found" });
      return;
    }

    const item = await inventory.addItem(req.body);

    res.status(200).json({ Error: false, Message: "Success", Item: item });
  } catch (err) {
    res.status(500).json({ Error: true, Message: err });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await inventory.getItemById(req.params.id);
    res.status(200).json({ Error: false, Message: "Success", Item: item });
  } catch (err) {
    res.status(500).json({ Error: true, Message: err });
  }
};

const deleteItemById = async (req, res) => {
  try {
    const item = await inventory.deleteItemById(req.params.id);
    if (item.affectedRows === 0) {
      res.status(404).json({ Error: true, Message: "Item not found" });
      return;
    }
    res.status(200).json({ Error: false, Message: "Success" });
  } catch (err) {
    res.status(500).json({ Error: true, Message: err });
  }
};

module.exports = { getAllItems, getItemById, addItem, deleteItemById };
