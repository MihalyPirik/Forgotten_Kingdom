const Tool = require("../../models/tool");
const ToolType = require("../../models/toolType");
const uuid = require("uuid");

const getTool = async (req, res, next) => {
  try {
    const data = await Tool.findAll({
      attributes: { exclude: ["player_id", "tool_type_id"] },
      include: { model: ToolType, attributes: { exclude: ["tool_type_id"] } },
      where: {
        player_id: req.params.player_id,
      }
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const postTool = async (req, res, next) => {
  try {
    const player_id = req.body.player_id;
    const tool_type_id = req.body.tool_type_id;
    await Tool.create({
      tool_id: uuid.v1(),
      player_id: player_id,
      tool_type_id: tool_type_id
    });

    res.status(201).json({ message: "Sikeres felvétel!" });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const putTool = async (req, res, next) => {
  try {
    const tool_type_id = req.body.tool_type_id;
    await Tool.update(
      {
        tool_type_id: tool_type_id
      },
      {
        where: {
          tool_id: req.params.tool_id,
        },
        include: { model: ToolType },
      }
    );

    res.status(200).json({ message: "Sikeres módosítás!" });
  } catch (error) {
    next(error);
  }
};

const deleteTool = async (req, res, next) => {
  try {
    const isDeleted = await Tool.destroy({ where: { tool_id: req.params.tool_id } });
    if (isDeleted == 0) {
      return res.status(404).json({ message: "Ilyen fegyver nem létezik!" })
    }
    res.status(200).json({ message: "Sikeres törlés!" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTool,
  postTool,
  putTool,
  deleteTool
};
