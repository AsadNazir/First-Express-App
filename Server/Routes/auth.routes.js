const auth = require("../Middleware/auth");

module.exports = function (app) {
  app.use(function (req, res, next) {
    next();
  });

  //login route
  app.post("/auth/login", auth.login);

  //register route
  app.post("/auth/register", auth.register);

  //verify route
  app.post("/auth/verify", auth.verify);
};
