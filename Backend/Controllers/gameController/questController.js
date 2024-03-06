const Quest = require("../../models/quest");
const QuestType = require("../../models/questType");
const uuid = require("uuid");

const getQuests = async (req, res, next) => {
    try {
        let data = null;
        if (req.params.is_active != undefined) {
            const is_active = req.params.is_active == `true` ? 1 : 0
            data = await Quest.findAll({
                where: {
                    player_id: req.params.player_id,
                    is_active: is_active
                },
                attributes: { exclude: ["player_id", "quest_id"] },
                include: { model: QuestType, attributes: { exclude: ["targetProgress"] } },
            });
        }
        else {
            data = await Quest.findAll({
                where: {
                    player_id: req.params.player_id,
                },
                attributes: { exclude: ["player_id", "quest_id"] },
                include: { model: QuestType, attributes: { exclude: ["currentProgress", "targetProgress"] } },
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
        const is_completed = req.body.is_completed;
        const is_active = req.body.is_active;
        const currentProgress = req.body.currentProgress;
        const targetProgress = req.body.targetProgress;
        await Quest.update(
            {
                is_completed: is_completed,
                is_active: is_active,
                currentProgress: currentProgress,
                targetProgress: targetProgress
            },
            {
                where: {
                    player_id: req.params.player_id,
                    quest_id: req.params.quest_id
                },
                include: { model: QuestType },
            }
        );

        res.status(200).json({ message: "Sikeres módosítás!" });
    } catch (error) {
        next(error);
    }
};

const deleteQuest = async (req, res, next) => {
    try {
        const isDeleted = await Quest.destroy({ where: { quest_id: req.params.quest_id, player_id: req.params.player_id } });

        if (isDeleted == 0) {
            return res.status(404).json({ message: "Ilyen küldetés nem létezik!" })
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
