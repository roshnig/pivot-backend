const Presentation = require("../models/presentations.model");

exports.postPresentation = (req, res, next) => {
  const { presentationId, slides } = req.body;
  const sessionId = Math.random().toString(36).slice(-4);
  const presentation = new Presentation({ presentationId, slides, sessionId });
  presentation
    .save()
    .then((presentation) => {
      res.status(200).send({ presentation });
    })
    .catch((err) => next(err));
};
