const { json } = require("body-parser");
const userModel = require("../Model/user.model");
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

const login = async (req, res) => {
  let results = await userModel.getUserByNameAndPassword(
    req.body.name,
    req.body.password
  );

  if (results.length > 0) {
    const token = jwt.sign(
      { id: results[0].id, name: results[0].name },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({
      Error: false,
      Message: "Success",
      User: results[0],
      Token: token,
    });
  } else {
    res.json({
      Error: true,
      Message: "Invalid username or password",
      User: null,
      Token: null,
    });
  }
};

const verify = async (req, res, next) => {
  let token = req.header("Authorization");

  if (!token)
    return res.status(401).json({ Error: true, Message: "Invalid token" });

  token = token.replace("Bearer ", "");

  jwt.verify(token, secretKey, (err, decoded) => {
    if (!err) {
      req.userId = decoded.id;
      next();
    } else {
      res.json({ Error: true, Message: "Invalid Token" });
    }
  });
};

const isAdministrator = async (req, res, next) => {
  //get user role from database
  let results = await userModel.getUserById(req.userId);

  if (results[0].role === "admin") {
    res.json({ Error: false, Message: "Success" });
    next();
  } else {
    res.status(403).json({ Error: true, Message: "Unauthorized" });
  }
};

const register = async (req, res) => {
  let results = await userModel.addUser(req.body.name, req.body.password);

  if (results.affectedRows > 0) {
    res.json({ Error: false, Message: "Success" });
  } else {
    res.json({ Error: true, Message: "Failed" });
  }
};

module.exports = { login, register, verify, isAdministrator };
