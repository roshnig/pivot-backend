const { createPresentation } = require("../models/presentations.model");

exports.postPresentation = (req, res, next) => {
  const { presentationId, slides } = req.body;
  console.log(presentationId, slides);
  createPresentation(presentationId, slides)
    .then((presentation) => {
      res.status(200).send({ presentation });
    })
    .catch((err) => next(err));
};
