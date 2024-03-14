const Quest = require("../../models/quest");
const QuestType = require("../../models/questType");

const getQuests = async (req, res, next) => {
  try {
    const player_id = req.token.id;
    let whereClause = { player_id: player_id };

    if (req.query.is_active !== undefined) {
      const is_active = req.query.is_active === "true" ? 1 : 0;
      whereClause.is_active = is_active;
    }

    if (req.query.is_mainstory !== undefined) {
      const is_mainstory = parseInt(req.query.is_mainstory);
      if (!isNaN(is_mainstory)) {
        whereClause.is_mainstory = is_mainstory;
      }
    }

    let orderClause = [];
    if (req.query.sort_by === "is_mainstory") {
      orderClause.push(["is_mainstory", "DESC"]);
    }

    let data = await Quest.findAll({
      where: whereClause,
      attributes: { exclude: ["player_id", "quest_id"] },
      include: {
        model: QuestType,
        attributes: { exclude: ["targetProgress"] },
      },
      order: orderClause,
    });

    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const postQuest = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const quest_id = req.body.quest_id;
    await Quest.create({
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
    const targetProgress = req.body.targetProgress;
    await Quest.update(
      {
        is_completed: is_completed,
        is_active: is_active,
        currentProgress: currentProgress,
        targetProgress: targetProgress,
      },
      {
        where: {
          player_id: player_id,
          quest_id: req.params.quest_id,
        },
        include: { model: QuestType },
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
    const isDeleted = await Quest.destroy({
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
