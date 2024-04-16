const Resident = require("../models/resident.js");
const QuestStat = require("../models/questStat.js");
const Item = require("../models/item");
const Inventory = require("../models/inventory.js");
const uuid = require("uuid");

async function SetInitialState(user) {
    await Resident.bulkCreate([
        {
            resident_id: uuid.v1(),
            resident_name: "Arthur",
            profession: "Kereskedő",
            objX: 0.73,
            objY: 0.4,
            blockX: 1,
            blockY: 1,
            world_id: user.player_id,
            quest_id: "First",
            isInterior: 0
        },
        {
            resident_id: uuid.v1(),
            resident_name: "Ulric",
            profession: "Kovács",
            objX: 0.32,
            objY: 0.64,
            blockX: 1,
            blockY: 0,
            world_id: user.player_id,
            isInterior: 0
        },
        {
            resident_id: uuid.v1(),
            resident_name: "Emma",
            profession: "Farmer",
            objX: 0.49,
            objY: 0.54,
            blockX: 2,
            blockY: 0,
            world_id: user.player_id,
            isInterior: 0
        },
        {
            resident_id: uuid.v1(),
            resident_name: "Dominik",
            profession: "Szörnyvadász",
            objX: 0.2,
            objY: 0.52,
            blockX: 1,
            blockY: 1,
            world_id: user.player_id,
            isInterior: 0
        },
        {
            resident_id: uuid.v1(),
            resident_name: "Michail",
            profession: "Lovag",
            objX: 0.26,
            objY: 0.67,
            blockX: 0,
            blockY: 0,
            world_id: user.player_id,
            isInterior: 0
        },
        {
            resident_id: uuid.v1(),
            resident_name: "Ármin",
            profession: "Mágus",
            objX: 0.49,
            objY: 0.63,
            blockX: 0,
            blockY: 1,
            world_id: user.player_id,
            isInterior: 0
        },
        {
            resident_id: uuid.v1(),
            resident_name: "Billy",
            profession: "Halász",
            objX: 0.25,
            objY: 0.4,
            blockX: 2,
            blockY: 1,
            world_id: user.player_id,
            isInterior: 0
        },
        {
            resident_id: uuid.v1(),
            resident_name: "Henry",
            profession: "Favágó",
            objX: 0.49,
            objY: 0.78,
            blockX: 1,
            blockY: 2,
            world_id: user.player_id,
            isInterior: 0
        },
        {
            resident_id: uuid.v1(),
            resident_name: "Minerva",
            profession: "Boszorkány",
            objX: 0.35,
            objY: 0.73,
            blockX: 3,
            blockY: 0,
            world_id: user.player_id,
            isInterior: 0
        },
    ]);

    await Inventory.bulkCreate([
        {
            amount: 0,
            item: "Coal",
            player_id: user.player_id
        },
        {
            amount: 0,
            item: "Fish",
            player_id: user.player_id
        },
        {
            amount: 0,
            item: "Iron",
            player_id: user.player_id
        },
        {
            amount: 0,
            item: "Stone",
            player_id: user.player_id
        },
        {
            amount: 0,
            item: "Wheat",
            player_id: user.player_id
        },
        {
            amount: 0,
            item: "Wood",
            player_id: user.player_id
        },
    ]);

    await QuestStat.bulkCreate([
        {
            quest_id: "First",
            is_completed: 0,
            is_active: 1,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Second",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Third",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Fourth",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Fifth",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Sixth",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Seventh",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Eight",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Ninth",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: "Tenth",
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
    ]);
}

module.exports = { SetInitialState };