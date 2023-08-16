const userModel = require('../Model/userModel');

const login = async (req, res) => {

    let results = await userModel.getUserByNameAndPassword(req.body.name, req.body.password);

    if (results.length > 0) {
        res.json({"Error": false, "Message": "Success", "User": results[0]});
    }
    else{
        res.json({"Error": true, "Message": "Invalid username or password", "User": null});
    }

};

module.exports = {login};