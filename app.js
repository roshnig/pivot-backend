require("./db/connect");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const home = require("./routes/home");
const apiInfo = require("./routes/apiInfo");
const results = require("./routes/results");
const presentations = require("./routes/presentations");

const connectDB = require("./db/connect");

require("dotenv").config();

const {
  handleInvalidUrlErrors,
  handleCustomErrors,
  handleServerErrors,
} = require("./error-handler/error");

app.use(express.json());

app.use("/", home);
app.use("/api", apiInfo);
app.use("/api/results", results);
app.use("api/presentations", presentations);

app.all("*", handleInvalidUrlErrors);
app.use(handleCustomErrors);
app.use(handleServerErrors);

let PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    //app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
};
start();
module.exports = app;
