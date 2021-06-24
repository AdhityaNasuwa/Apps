const fs = require("fs");
exports.Main = (req, res) => {
  const tools = fs.readFileSync("./Str/Tools.json", "utf-8");
  const tool = JSON.parse(tools);
  const result = tool.find((tool) => tool.link === req.params.id);
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
