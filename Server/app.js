require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const auth = require("./Middleware/auth");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package

// Allow requests only from specific origins
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require("./Routes/auth.routes")(app);
require("./Routes/user.routes")(app);


app.listen(process.env.SVR_PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
