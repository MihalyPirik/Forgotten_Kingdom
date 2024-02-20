const { getAllData, getQuests, getInventory, putPlayer, deletePlayer } = require('../../controllers/gameController/playerController');
const { userAuth } = require('../../middlewares/auth');

const playerRouter = require('express').Router({ mergeParams: true });

// playerRouter.use(userAuth)

playerRouter.get('/', getAllData);
playerRouter.get('/quests', getQuests);
playerRouter.get('/quests/:is_active', getQuests);
playerRouter.get('/inventory', getInventory);

playerRouter.put('/', putPlayer);

playerRouter.delete('/', deletePlayer);

module.exports = playerRouter;