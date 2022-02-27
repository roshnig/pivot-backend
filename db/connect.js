const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGO_URI;

const connectDB = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
