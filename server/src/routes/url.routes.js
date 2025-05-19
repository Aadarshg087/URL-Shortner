const express = require("express");

const {
  getShortLink,
  redirectRequest,
} = require("../controllers/url.controllers.js");

const urlRouter = express.Router();

urlRouter.post("/shorten", getShortLink);
urlRouter.get("/:shortID", redirectRequest);

module.exports = { urlRouter };
