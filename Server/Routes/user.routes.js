const auth = require("../Middleware/auth");

module.exports = function (app) {
  app.use(function (req, res, next) {
    next();
  });

  app.post(
    "/user/Home",
    [auth.verify, auth.isAdministrator],
    function (req, res) {
      res.send("Hello Admin!");
    }
  );
};
