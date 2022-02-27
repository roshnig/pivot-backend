const mongoose = require("mongoose");

const url = process.env.MONGO_URI;

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDB;
