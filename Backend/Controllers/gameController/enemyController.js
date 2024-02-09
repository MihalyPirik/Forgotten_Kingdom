const Enemy = require("../../models/enemy");
const EnemyType = require("../../models/enemyType");
const uuid = require("uuid");

const getAllEnemies = async (req, res, next) => {
  try {
    const data = await Enemy.findAll({
      attributes: { exclude: ["world_id"] },
      include: { model: EnemyType },
    });
    res.status(200).json({ data: data });
  } catch (error) {
    console.log("err:", error);
    next(error);
  }
};

const getBlockEnemies = async (req, res, next) => {
  try {
    const data = await Enemy.findAll({
      where: { blockX: req.params.blockX, blockY: req.params.blockY },
      attributes: { exclude: ["world_id"] },
      include: { model: EnemyType },
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const postEnemy = async (req, res, next) => {
  try {
    const objX = req.body.objX;
    const objY = req.body.objY;
    const blockX = req.body.blockX;
    const blockY = req.body.blockY;
    const world_id = req.body.world_id;
    const enemy_type_id = req.body.enemy_type_id;
    await Enemy.create({
      enemy_id: uuid.v1(),
      objX: objX,
      objY: objY,
      blockX: blockX,
      blockY: blockY,
      world_id: world_id,
      enemy_type_id: enemy_type_id,
    });

    res.status(201).json({ message: "Sikeres felvétel!" });
  } catch (error) {
    console.log(error);
  }
};

const putEnemy = async (req, res, next) => {
  try {
    const objX = req.body.objX;
    const objY = req.body.objY;
    const blockX = req.body.blockX;
    const blockY = req.body.blockY;
    const HP = req.body.HP;
    const attack = req.body.attack;
    const level = req.body.level;
    await Enemy.update(
      {
        objX: objX,
        objY: objY,
        blockX: blockX,
        blockY: blockY,
        HP: HP
      },
      {
        where: {
          enemy_id: req.params.enemy_id,
        },
        include: { model: EnemyType },
      }
    );

    res.status(201).json({ message: "Sikeres módosítás!" });
  } catch (error) {
    console.log(error);
  }
};

const deleteEnemy = async (req, res, next) => {
  try {
    await Enemy.destroy({ where: { enemy_id: req.params.enemy_id } });

    res.status(201).json({ message: "Sikeres törlés!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllEnemies,
  getBlockEnemies,
  postEnemy,
  putEnemy,
  deleteEnemy,
};
