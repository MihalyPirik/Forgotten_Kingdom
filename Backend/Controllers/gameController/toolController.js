const Tool = require("../../models/tool");
const ToolType = require("../../models/toolType");
const uuid = require("uuid");
const Player = require('../../models/player')

const getTool = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const data = await (await Player.findByPk(player_id)).getToolTypes({joinTableAttributes:[]})
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const postTool = async (req, res, next) => {
  try {
    const player_id = req.token.id;
    
    const tool_type_id = req.body.tool_type_id;
    await Tool.create({
      tool_id: uuid.v1(),
      player_id: player_id,
      tool_type_id: tool_type_id
    });

    res.status(201).json({ data: {message: "Sikeres felvétel!"} });
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

    res.status(200).json({ data: {message: "Sikeres módosítás!"} });
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
    res.status(200).json({ data: {message: "Sikeres törlés!"} });
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
