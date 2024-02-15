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
    let data = null;
    if (req.params.is_active != undefined) {
      const is_active = req.params.is_active == `true`? 1:0
      data = await QuestStatistics.findAll({
        where: { 
          player_id: req.params.player_id,
          is_active: is_active
         },
        include: { model: Quest },
      });
    }
    else {
      data = await QuestStatistics.findAll({
        where: { 
          player_id: req.params.player_id
         },
        include: { model: Quest },
      });
    };
    
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const getInventory = async (req, res, next) => {
  try {
    const data = await Player.findByPk(req.params.player_id, {
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
    const player_name = req.body.player_name;
    const HP = req.body.HP;
    const money = req.body.money;
    const world_name = req.body.world_name;
    const stone = req.body.wood;
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
          player_id: req.params.player_id,
        },
        include: { model: Quest },
      }
    );

    res.status(201).json({ message: "Sikeres módosítás!" });
  } catch (error) {
    next(error);
  }
};

const putUser = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

    await Player.update(
      {
        email: email,
        password: hashPassword,
      },
      {
        where: {
          player_id: req.params.player_id,
        },
      }
    );

    res.status(201).json({ message: "Sikeres módosítás!" });
  } catch (error) {
    next(error);
  }
};

const deletePlayer = async (req, res, next) => {
  try {
    await Player.destroy({ where: { player_id: req.params.player_id } });

    res.status(201).json({ message: "Sikeres törlés!" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllData,
  getResidents,
  getQuests,
  getInventory,
  putPlayer,
  putUser,
  deletePlayer,
};
