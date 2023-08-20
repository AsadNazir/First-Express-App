const category = require('../Model/category.model');


const getAllCategories = async (req, res) => {
    try {
        const categories = await category.getAllCategories();
        res.status(200).json({ Error: false, Message: "Success", Categories: categories });
    } catch (err) {
        res.status(500).json({ Error: true, Message: err });
    }
    }

const getCategoryById = async (req, res) => {
    try {
        const cat = await category.getCategoryById(req.params.id);
        res.status(200).json({ Error: false, Message: "Success", Category: cat });
    } catch (err) {
        res.status(500).json({ Error: true, Message: err });
    }
}

module.exports = { getAllCategories, getCategoryById };
