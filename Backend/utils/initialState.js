const Resident = require('../models/resident.js');
const QuestStat = require('../models/questStat.js');
const Item = require('../models/item');
const Inventory = require('../models/inventory.js');
const uuid = require('uuid');

async function SetInitialState(user) {
    await Resident.bulkCreate([
        {
            resident_id: uuid.v1(),
            resident_name: 'Arthur',
            profession: 'Kereskedő',
            objX: 0.73,
            objY: 0.4,
            blockX: 1,
            blockY: 1,
            world_id: user.player_id,
            quest_id: 'First',
            isInterior: 0
        }
    ]);

    await Inventory.bulkCreate([
        {
            amount: 0,
            item: 'Coal',
            player_id: user.player_id
        },
        {
            amount: 0,
            item: 'Fish',
            player_id: user.player_id
        },
        {
            amount: 0,
            item: 'Iron',
            player_id: user.player_id
        },
        {
            amount: 0,
            item: 'Stone',
            player_id: user.player_id
        },
        {
            amount: 0,
            item: 'Wheat',
            player_id: user.player_id
        },
        {
            amount: 0,
            item: 'Wood',
            player_id: user.player_id
        },
    ]);

    await QuestStat.bulkCreate([
        {
            quest_id: 'First',
            is_completed: 0,
            is_active: 1,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Second',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Third',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Fourth',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Fifth',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Sixth',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Seventh',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Eight',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Ninth',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
        {
            quest_id: 'Tenth',
            is_completed: 0,
            is_active: 0,
            currentProgress: 0,
            player_id: user.player_id,
        },
    ]);
}

module.exports = { SetInitialState };