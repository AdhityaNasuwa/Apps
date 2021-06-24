require("../Models/BaseModel");
const Tools = require("../Models/ClientModel");

exports.Main = async (req, res) => {
  const result = await Tools.findOne({ Link: req.params.id });
  if (!result) {
    res.json({
      Error: 404,
      Message: "Tools Not Found / Tools Tidak Ditemukan",
    });
  } else {
    res.render(result.File, {
      layout: "Layouts/main-page",
    });
  }
};
