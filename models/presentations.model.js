const mongoose = require("mongoose");

const PresentationSchema = new mongoose.Schema({
  presentationId: String,
  slides: [
    {
      slideImageUrl: String,
      slideId: String,
      pivot: {
        slideId: String,
        numAnswers: Number,
        correctAnswer: { type: String, enum: ["A", "B", "C", "D", "E", "F"] },
      },
    },
  ],
});

const Presentation = mongoose.model("Presentation", PresentationSchema);

exports.updatePresentation = (idFromQuery, data) => {
  console.log("in model");
  const filter = { presentationId: idFromQuery };
  const options = { upsert: true, new: true };
  return Presentation.findOneAndUpdate(filter, data, options)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

// module.exports = mongoose.model("Presentations", PresentationSchema);
