require("../Models/BaseModel");
const ClientApps = require("../Models/ClientModel");
const fs = require("fs");

// Random TEXT
function getRandomText(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

exports.Main = (req, res) => {
  const tools = fs.readFileSync("./Str/Tools.json", "utf-8");
  const tool = JSON.parse(tools);
  res.render("Main", {
    layout: "Layouts/main-page",
    tool,
  });
};
