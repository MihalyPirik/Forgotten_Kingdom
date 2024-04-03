const Player = require("../../models/player");
const Tool = require("../../models/tool");
const ToolType = require("../../models/toolType");
const Market = require('../../models/market')
const Enemy = require('../../models/enemy')
const Inventory = require('../../models/inventory')
const QuestStat = require('../../models/questStat');
const EnemyType = require("../../models/enemyType");
const Item = require('../../models/item')
const Quest = require('../../models/quest');
const { Model } = require("sequelize");
const getAllData = async (req, res, next) => {

  try {
    const player_id = req.token.id;

    const data = await Player.findOne({
      where: { player_id: player_id },
      attributes: { exclude: ["player_id", "password", "email"] },
      include:[
        { model: ToolType, through: { attributes: [] } },
        { model: Item, through: { attributes: ['amount'] } },
        { model: Market, attributes: { exclude: ['player_id'] } },
        { 
        model: QuestStat,
        attributes: { exclude: [ 'player_id', 'quest_id' ] },
        include:
        [ 
          {
            model: Quest,
            attributes: { exclude: [ 'player_id', 'quest_id', 'enemy_type' ] },
            include: [ EnemyType, Item ]
          }
        ]
      }
      ]
    });

    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const getInventory = async (req, res, next) => {
  try {
    const items = {}
    let data = await Player.findByPk(req.token.id)
    data = await data.getItems({joinTableAttributes: ['amount'] })
 for (const item of data) {
  items[item.name]=item.Inventory.amount
 }

    res.status(200).json({ data: items });
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
    Object.keys(req.body).forEach(async(key)=>{
      await Inventory.update({
  amount:req.body[key]
      },{
        where:{player_id:player_id,item:key}
      }
      )
    })
    

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
