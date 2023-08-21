const location = require('../Model/location.model');


const getAllLocations = async (req, res) => {
    try {
        const categories = await location.getAllLocations();
        res.status(200).json({ Error: false, Message: "Success", Location   : categories });
    } catch (err) {
        res.status(500).json({ Error: true, Message: err });
    }
    }

const getLocationById = async (req, res) => {
    try {
        const loc = await location.getLocationById(req.params.id);
        res.status(200).json({ Error: false, Message: "Success", Location: loc });
    } catch (err) {
        res.status(500).json({ Error: true, Message: err });
    }
}

module.exports = { getAllLocations, getLocationById };
