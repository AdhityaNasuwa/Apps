const mongoose = require("mongoose");

const Contact = mongoose.model("contacts", {
  nama: {
    type: String,
    required: true,
  },
});

module.exports = Contact;
