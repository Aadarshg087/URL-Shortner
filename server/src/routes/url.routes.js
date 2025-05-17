import express from "express";
import {
  getShortLink,
  redirectRequest,
} from "../controllers/url.controllers.js";
const router = express.Router();

router.post("/shorten", getShortLink);
router.get("/:shortID", redirectRequest);

export { router };
