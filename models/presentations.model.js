const mongoose = require("mongoose");

const PresentationSchema = new mongoose.Schema({
  presentationId: { type: String, required: true },
  sessionId: String,
  slides: [
    {
      slideImageUrl: String,
      slideId: String,
      hasQuestion: Boolean,
      numAnswers: Number,
      correctAnswer: { type: String, enum: ["A", "B", "C", "D", "E", "F"] },
      responses: [
        {
          username: String,
          answer: { type: String, enum: ["A", "B", "C", "D", "E", "F"] },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Presentation", PresentationSchema);
