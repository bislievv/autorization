const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(require("./routes/index"));

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(process.env.PORT);
    console.log("Conected");
  })
  .catch(() => {
    console.log("Error");
  });
