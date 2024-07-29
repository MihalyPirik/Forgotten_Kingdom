const { getQuests, postQuest, putQuest, deleteQuest } = require('../../Controllers/gameController/questController');
const { userAuth } = require('../../middlewares/auth');
const { ProcessQuery } = require('../../middlewares/query');
const questRouter = require('express').Router({ mergeParams: true });

questRouter.use(userAuth);

questRouter.get('/', ProcessQuery, getQuests);

questRouter.post('/', postQuest);

questRouter.put('/:quest_id', putQuest);

questRouter.delete('/:quest_id', deleteQuest);

module.exports = questRouter;