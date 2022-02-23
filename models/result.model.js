const mongoose = require("mongoose");
const ResultSchema = new mongoose.Schema({
  presentationid: String,
  slideid: String,
  correctAnswer: String,
  poolDuration: Number
});

module.exports = mongoose.model("Results", ResultSchema);
