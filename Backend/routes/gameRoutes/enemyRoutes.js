const { getAllEnemies, postEnemy, putEnemy, deleteEnemy } = require('../../Controllers/gameController/enemyController');
const { userAuth } = require('../../middlewares/auth');
const { ProcessQuery } = require('../../middlewares/query');
const enemyRouter = require('express').Router({ mergeParams: true });

enemyRouter.use(userAuth);

enemyRouter.get('/', ProcessQuery, getAllEnemies);

enemyRouter.post('/', postEnemy);

enemyRouter.put('/:enemy_id', putEnemy);

enemyRouter.delete('/:enemy_id', deleteEnemy);

module.exports = enemyRouter;