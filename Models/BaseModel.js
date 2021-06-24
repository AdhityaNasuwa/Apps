const mongoose = require("mongoose");
mongoose.connect(
  "mmongodb+srv://adhtya:adhitya025@cluster0.sfgfy.mongodb.net/node_js?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
