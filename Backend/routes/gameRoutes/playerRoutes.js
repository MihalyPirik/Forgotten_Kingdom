const { getAllData, getResidents, getQuests, getInventory, putPlayer, putUser, deletePlayer } = require('../../controllers/gameController/playerController');
const { userAuth } = require('../../middlewares/auth');

const playerRouter = require('express').Router({ mergeParams: true });

// playerRouter.use(userAuth)

playerRouter.get('/', getAllData);
playerRouter.get('/residents/:blockX/:blockY', getResidents);
playerRouter.get('/quests', getQuests);
playerRouter.get('/inventory', getInventory);

playerRouter.put('/', putPlayer);
playerRouter.put('/', putUser);

playerRouter.delete('/', deletePlayer);

module.exports = playerRouter;