const QuestStatistics = require("../../models/questStatistics");
const Quest = require("../../models/quest");
const uuid = require("uuid");

const getQuests = async (req, res, next) => {
    try {
        let data = null;
        if (req.params.is_active != undefined) {
            const is_active = req.params.is_active == `true` ? 1 : 0
            data = await QuestStatistics.findAll({
                where: {
                    player_id: req.params.player_id,
                },
                attributes: { exclude: ["player_id", "quest_id"] },
                include: { model: Quest, attributes: { exclude: ["currentProgress", "targetProgress"] } },
            });
        }
        else {
            data = await QuestStatistics.findAll({
                where: {
                    player_id: req.params.player_id,
                },
                attributes: { exclude: ["player_id", "quest_id"] },
                include: { model: Quest, attributes: { exclude: ["currentProgress", "targetProgress"] } },
            });
        };

        res.status(200).json({ data: data });
    } catch (error) {
        next(error);
    }
};

const postQuest = async (req, res, next) => {
    try {
        const player_id = req.body.player_id;
        const quest_id = req.body.quest_id;
        await Quest.create({
            enemy_id: uuid.v1(),
            player_id: player_id,
            quest_id: quest_id
        });

        res.status(201).json({ message: "Sikeres felvétel!" });
    } catch (error) {
        next(error);
    }
};

const putQuest = async (req, res, next) => {
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

        res.status(200).json({ message: "Sikeres módosítás!" });
    } catch (error) {
        next(error);
    }
};

const deleteQuest = async (req, res, next) => {
    try {
        const isDeleted = await Enemy.destroy({ where: { enemy_id: req.params.enemy_id } });

        if (isDeleted == 0) {
            return res.status(404).json({ message: "Ilyen ellenség nem létezik!" })
        }
        res.status(200).json({ message: "Sikeres törlés!" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getQuests,
    postQuest,
    putQuest,
    deleteQuest
};
