const mongoose = require("mongoose");
const { generateWordId } = require("letter-id");

const PresentationSchema = new mongoose.Schema({
  presentationId: { type: String, required: true },
  sessionId: String,
  slides: [
    {
      slideImageUrl: String,
      slideId: String,
      pivot: {
        slideId: String,
        numAnswers: Number,
        correctAnswer: { type: String, enum: ["A", "B", "C", "D", "E", "F"] },
        responses: [
          {
            username: String,
            answer: { type: String, enum: ["A", "B", "C", "D", "E", "F"] },
          },
        ],
      },
    },
  ],
});

const Presentation = mongoose.model("Presentation", PresentationSchema);

exports.createPresentation = (presentationId, slides) => {
  console.log("in model");
  const sessionId = generateWordId(3);
  console.log(sessionId);
  const pres = new Presentation({ presentationId, slides, sessionId });
  return pres.save();
};
