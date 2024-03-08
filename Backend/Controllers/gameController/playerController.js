const Player = require("../../models/player");
const Tool = require("../../models/tool");
const ToolType = require("../../models/toolType");

const getAllData = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const data = await Player.findOne({
      where: { player_id: player_id },
      attributes: { exclude: ["player_id", "password", "email"] },
      include: [
        {
          model: Tool,
          attributes: { exclude: ["player_id", "tool_type_id"] },
          include: {
            model: ToolType,
            attributes: { exclude: ["tool_type_id"] },
          },
        },
      ],
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const getInventory = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const data = await Player.findByPk(player_id, {
      attributes: ["stone", "wood", "coal", "iron", "wheat", "fish"],
      raw: true,
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const putPlayer = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const player_name = req.body.player_name;
    const HP = req.body.HP;
    const money = req.body.money;
    const world_name = req.body.world_name;
    const stone = req.body.stone;
    const wood = req.body.wood;
    const coal = req.body.coal;
    const iron = req.body.iron;
    const wheat = req.body.wheat;
    const fish = req.body.fish;
    const objX = req.body.objX;
    const objY = req.body.objY;
    const blockX = req.body.blockX;
    const blockY = req.body.blockY;
    await Player.update(
      {
        player_name: player_name,
        HP: HP,
        money: money,
        world_name: world_name,
        stone: stone,
        wood: wood,
        coal: coal,
        iron: iron,
        wheat: wheat,
        fish: fish,
        objX: objX,
        objY: objY,
        blockX: blockX,
        blockY: blockY,
      },
      {
        where: {
          player_id: player_id,
        },
      }
    );

    res.status(200).json({ data: { message: "Sikeres módosítás!" } });
  } catch (error) {
    next(error);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const isDeleted = await Player.destroy({ where: { player_id: player_id } });
    if (isDeleted == 0) {
      return res.status(404).json({ message: "Ilyen játékos nem létezik!" });
    }
    res.status(200).json({ data: { message: "Sikeres törlés!" } });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllData,
  getInventory,
  putPlayer,
  deletePlayer,
};
