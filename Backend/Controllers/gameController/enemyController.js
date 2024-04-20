const Enemy = require("../../models/enemy");
const EnemyType = require("../../models/enemyType");
const uuid = require("uuid");
const ProcessQuery = require('../../utils/queryProcessor')
const getAllEnemies = async (req, res, next) => {
  try {
    const query = ProcessQuery(Enemy,req.query)
    query.world_id = req.token.id
    const data = await Enemy.findAll({
      attributes: { exclude: ["world_id", "enemy_type_id"] },
      include: { model: EnemyType, attributes: { exclude: ["enemy_type_id"] } },
      where:query
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const postEnemy = async (req, res, next) => {
  try {
    const world_id = req.token.id;

    const objX = req.body.objX;
    const objY = req.body.objY;
    const blockX = req.body.blockX;
    const blockY = req.body.blockY;
    const enemy_type_id = req.body.enemy_type_id;
    const data = await Enemy.create({
      enemy_id: uuid.v1(),
      objX: objX,
      objY: objY,
      blockX: blockX,
      blockY: blockY,
      world_id: world_id,
      enemy_type_id: enemy_type_id
    });

    res.status(201).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const putEnemy = async (req, res, next) => {
  try {
    const objX = req.body.objX;
    const objY = req.body.objY;
    const blockX = req.body.blockX;
    const blockY = req.body.blockY;
    const HP = req.body.HP;
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

    res.status(200).json({ data: {message: "Sikeres módosítás!"} });
  } catch (error) {
    next(error);
  }
};

const deleteEnemy = async (req, res, next) => {
  try {
    const isDeleted = await Enemy.destroy({ where: { enemy_id: req.params.enemy_id } });

    if (isDeleted == 0) {
      return res.status(404).json({ message: "Ilyen ellenség nem létezik!" })
    }
    res.status(200).json({ data: {message: "Sikeres törlés!"} });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEnemies,
  postEnemy,
  putEnemy,
  deleteEnemy,
};
