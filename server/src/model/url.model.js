const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      required: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    history: [{ lastAccessed: { type: Date } }],
  },
  { timestamps: true }
);

const url = new mongoose.model("url", urlSchema);

module.exports = url;
