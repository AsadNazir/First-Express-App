const express = require("express");
const app = express();
const port = 3000;
const auth = require("./Controller/AuthController");
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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", auth.login);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
