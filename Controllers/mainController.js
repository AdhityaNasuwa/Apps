require("../Models/BaseModel");
const Tools = require("../Models/ClientModel");
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

exports.Main = async (req, res) => {
  const tool = await Tools.find();
  // const tools = fs.readFileSync("./Str/Tools.json", "utf-8");
  // const tool = JSON.parse(tools);

  res.render("main", {
    layout: "Layouts/main-page",
    tool,
  });
};
