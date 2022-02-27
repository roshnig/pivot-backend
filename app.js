const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

const cors = require("cors");
app.use(cors());
const home = require("./routes/home");
const apiInfo = require("./routes/apiInfo");
const results = require("./routes/results");
const presentations = require("./routes/presentations");

const {
  handleInvalidUrlErrors,
  handleCustomErrors,
  handleServerErrors,
} = require("./error-handler/error");

app.use(express.json());

app.use("/", home);
app.use("/api", apiInfo);
app.use("/api/results", results);
app.use("/api/presentations", presentations);

app.all("*", handleInvalidUrlErrors);
app.use(handleCustomErrors);
app.use(handleServerErrors);

let PORT = process.env.PORT || 3000;

module.exports = app;
