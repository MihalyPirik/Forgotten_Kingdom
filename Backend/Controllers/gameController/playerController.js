const Player = require("../../models/player");
const Resident = require("../../models/resident");
const QuestStatistics = require("../../models/questStatistics");
const Quest = require("../../models/quest");

const getAllData = async (req, res, next) => {
  try {
    const data = await Player.findOne({
      where: { player_id: req.params.player_id },
      attributes: { exclude: ["player_id", "password", "email"] },
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const getResidents = async (req, res, next) => {
  try {
    const data = await Resident.findAll({
      where: {
        world_id: req.params.player_id,
        blockX: req.params.blockX,
        blockY: req.params.blockY,
      },
      attributes: { exclude: ["world_id"] },
      include: { model: Quest },
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const getQuests = async (req, res, next) => {
  try {
    const data = await QuestStatistics.findAll({
      where: { player_id: req.params.player_id },
      include: { model: Quest },
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const getInventory = async (req, res, next) => {
  try {
    const data = await Player.findByPk(req.params.playerID, {
      attributes: ["stone", "wood", "coal", "iron", "wheat", "fish"],
      raw: true,
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    await Player.destroy({ where: { player_id: req.params.player_id } });

    res.status(201).json({ message: "Sikeres törlés!" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllData,
  getResidents,
  getQuests,
  getInventory,
  deletePlayer,
};
