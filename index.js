require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//middleware
const app = express();
app.use(bodyParser.json());

//routes
const userRoute = require("./routes/userRoute");

// connecting to server
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB CONNECTED!!!!!!!!!!!"))
  .catch((err) => console.log(err));

app.get("/xyz", (req, res) => {
  res.send("Hello world!");
});

app.use(userRoute);

app.listen("3000", () => {
  console.log("listening on port 3000");
});
