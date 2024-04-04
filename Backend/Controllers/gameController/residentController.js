const Resident = require("../../models/resident");
const Quest = require("../../models/quest");
const QuestStat = require('../../models/questStat')
const uuid = require("uuid");
const QueryProcessor = require('../../utils/queryProcessor')
const getAllResidents = async (req, res, next) => {
    try {
        const query = QueryProcessor(Resident,req.query)
query.world_id = req.token.id
        const data = await Resident.findAll({
            where:query,
            attributes: { exclude: ["world_id", "quest_id"] },
            include: { model: QuestStat, include:[Quest,Resident], where:{player_id:req.token.id} },
        });
        res.status(200).json({ data: data });
    } catch (error) {
        next(error);
    }
};


const postResident = async (req, res, next) => {
    try {
        const world_id = req.token.id;

        const objX = req.body.objX;
        const objY = req.body.objY;
        const blockX = req.body.blockX;
        const blockY = req.body.blockY;
        const resident_name = req.body.resident_name;
        const profession = req.body.profession;
        const quest_id = req.body.quest_id;
        await Resident.create({
            resident_id: uuid.v1(),
            objX: objX,
            objY: objY,
            blockX: blockX,
            blockY: blockY,
            resident_name: resident_name,
            profession: profession,
            world_id: world_id,
            quest_id: quest_id
        });

        res.status(201).json({ data: {message: "Sikeres felvétel!"} });
    } catch (error) {
        next(error);
    }
};

const putResident = async (req, res, next) => {
    try {
        const objX = req.body.objX;
        const objY = req.body.objY;
        const blockX = req.body.blockX;
        const blockY = req.body.blockY;
        const resident_name = req.body.resident_name;
        const profession = req.body.profession;
        const quest_id = req.body.quest_id;
        await Resident.update(
            {
                objX: objX,
                objY: objY,
                blockX: blockX,
                blockY: blockY,
                resident_name: resident_name,
                profession: profession,
                quest_id: quest_id
            },
            {
                where: {
                    resident_id: req.params.resident_id,
                },
                include: { model: Quest },
            }
        );

        res.status(200).json({ data: {message: "Sikeres módosítás!"} });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllResidents,
    postResident,
    putResident,
};
