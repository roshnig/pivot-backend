const express = require("express");
const router = express.Router();
const { putPresentation } = require("../controllers/presentations.controller");

router.put("/:presentationId", putPresentation);

module.exports = router;
