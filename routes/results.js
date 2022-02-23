const express = require("express");
const router = express.Router();
const { getAllResults, createResult, getResult, updateResult, deleteResult } = require("../controllers/result.controller");

router.route("/").get(getAllResults).post(createResult);
router.route("/:id").get(getResult).patch(updateResult).delete(deleteResult);

module.exports = router;
