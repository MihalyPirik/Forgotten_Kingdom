const Quest = require("../../models/quest");
const QuestStat = require('../../models/questStat')
const { Sequelize } = require('sequelize');
const EnemyType = require("../../models/enemyType");
const Item = require('../../models/item')
const QueryProcessor = require('../../utils/queryProcessor')
const getQuests = async (req, res, next) => {
  try {
const globalQuery = QueryProcessor(QuestStat,req.query)
globalQuery.player_id = req.token.id
  const data = await QuestStat.findAll({
    where:globalQuery,
    attributes:{exclude:['player_id']},
    include:[{model:Quest,include:[Item,EnemyType],where:QueryProcessor(Quest,req.query)}]
  })



    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const postQuest = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const quest_id = req.body.quest_id;
    await QuestStat.create({
      player_id: player_id,
      quest_id: quest_id,
    });

    res.status(201).json({ data: { message: "Sikeres felvétel!" } });
  } catch (error) {
    next(error);
  }
};

const putQuest = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const is_completed = req.body.is_completed;
    const is_active = req.body.is_active;
    const currentProgress = req.body.currentProgress;
    await QuestStat.update(
      {
        is_completed: is_completed,
        is_active: is_active,
        currentProgress: currentProgress,
      },
      {
        where: {
          player_id: player_id,
          quest_id: req.params.quest_id,
        },
      }
    );

    res.status(200).json({ data: { message: "Sikeres módosítás!" } });
  } catch (error) {
    next(error);
  }
};

const deleteQuest = async (req, res, next) => {
  try {
    const player_id = req.token.id;
    const isDeleted = await QuestStat.destroy({
      where: { quest_id: req.params.quest_id, player_id: player_id },
    });

    if (isDeleted == 0) {
      return res.status(404).json({ message: "Ilyen küldetés nem létezik!" });
    }
    res.status(200).json({ data: { message: "Sikeres törlés!" } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getQuests,
  postQuest,
  putQuest,
  deleteQuest,
};
