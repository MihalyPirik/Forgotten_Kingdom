const { getQuests, postQuest, putQuest, deleteQuest } = require('../../Controllers/gameController/questController');
const { userAuth } = require('../../middlewares/auth');

const questRouter = require('express').Router({ mergeParams: true });

// questRouter.use(userAuth)

questRouter.get('/', getQuests);
questRouter.get('/:is_active', getQuests);

questRouter.post('/', postQuest);

questRouter.put('/:quest_id', putQuest);

questRouter.delete('/:quest_id', deleteQuest);

module.exports = questRouter;