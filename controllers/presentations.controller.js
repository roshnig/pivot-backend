const { updatePresentation } = require("../models/presentations.model");

exports.putPresentation = (req, res, next) => {
  const { presentationId } = req.params;
  const slides = req.body;
  console.log(slides);
  updatePresentation(presentationId, slides)
    .then((presentation) => {
      res.status(201).send({ presentation });
    })
    .catch((err) => next(err));
};
