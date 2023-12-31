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



// Routes
app.use("/auth", require("./Routes/auth.routes")); 
app.use("/user", require("./Routes/user.routes"));
app.use("/inventory", require("./Routes/inventory.routes"));
// app.use("/", require("./Routes/category.routes"));
// app.use("/", require("./Routes/location.routes"));


app.listen(process.env.SVR_PORT || 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
