const mongoose = require("mongoose");

const Tools = mongoose.model("Tools", {
  Nama: {
    type: String,
    required: true,
  },
  Des: {
    type: String,
    required: true,
  },
  File: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
});

module.exports = Tools;
