const mongoose = require("mongoose");

const ClientApps = mongoose.model("Client", {
  ClientID: {
    type: String,
    required: true,
  },
});

module.exports = ClientApps;
