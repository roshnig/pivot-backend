const Result = require("../models/result.model");

const getAllResults = async (req, res) => {
  try {
    const results = await Result.find({});
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createResult = async (req, res) => {
  try {
    const result = await Result.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ msg: error });
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
    res.status(500).json({ msg: error });
  }
};
const updateResult = (req, res) => {
  res.send("All items from controller");
};
const deleteResult = (req, res) => {
  res.send("All items from controller");
};

module.exports = { getAllResults, createResult, getResult, updateResult, deleteResult };
