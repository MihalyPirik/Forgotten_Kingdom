const Resident = require("../../models/resident");
const Quest = require("../../models/quest");
const uuid = require("uuid");

const getAllResidents = async (req, res, next) => {
    try {
        const data = await Resident.findAll({
            where: {
                world_id: req.params.player_id
            },
            attributes: { exclude: ["world_id"] },
            include: { model: Quest },
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

const postResident = async (req, res, next) => {
    try {
        const objX = req.body.objX;
        const objY = req.body.objY;
        const blockX = req.body.blockX;
        const blockY = req.body.blockY;
        const resident_name = req.body.resident_name;
        const profession = req.body.profession;
        const world_id = req.body.world_id;
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

        res.status(201).json({ message: "Sikeres felvétel!" });
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
        await Resident.update(
            {
                objX: objX,
                objY: objY,
                blockX: blockX,
                blockY: blockY,
                resident_name: resident_name,
                profession: profession
            },
            {
                where: {
                    resident_id: req.params.resident_id,
                },
                include: { model: Quest },
            }
        );

        res.status(200).json({ message: "Sikeres módosítás!" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllResidents,
    getResidents,
    postResident,
    putResident
};
