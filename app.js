require("./db/connect");
const express = require("express");
const app = express();
const results = require("./routes/results");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
//app.use(express.static("./public"));
app.use(express.json());

app.use("/api/results", results);
let PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT);
  } catch (error) {
    console.log("error");
  }
};
start();
console.log("GO");

module.exports = app;
