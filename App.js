const express = require("express");
const RouterMain = require("./Routers/RouterMain");
const expressLayout = require("express-ejs-layouts");
const app = new express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(expressLayout);
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", RouterMain);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server Running on PORT : " + PORT);
});
