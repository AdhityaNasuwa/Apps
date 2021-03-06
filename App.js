const express = require("express");
const RouterMain = require("./Routers/RouterMain");
const RouterTools = require("./Routers/RouterTools");
const expressLayout = require("express-ejs-layouts");
const app = new express();
const PORT = process.env.PORT || 3000;
console.log(process.env.BASE_URL);
app.set("view engine", "ejs");
app.use(expressLayout);
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));
app.use("/", RouterMain);
app.use("/Tools", RouterTools);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server Running on PORT : " + PORT);
});
