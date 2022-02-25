const Result = require("../models/result.model");

const getAllResults = async (req, res, next) => {
  try {
    const results = await Result.find({});
    res.status(200).json({ results });
  } catch (error) {
    next(error);
  }
};
const createResult = async (req, res, next) => {
  try {
    const result = await Result.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};
const getResult = async (req, res) => {
  try {
    const { id: resultID } = req.params;
    const result = await Result.findOne({ _id: resultID });
    if (!result) {
      return res.status(404).json({ msg: `No task with id: ${resultID} ` });
    }
    res.status(200).send({ result });
  } catch (error) {
    next(error);
  }
};
const updateResult = (req, res) => {
  res.send("All items from controller");
};
const deleteResult = (req, res) => {
  res.send("All items from controller");
};

module.exports = { getAllResults, createResult, getResult, updateResult, deleteResult };
