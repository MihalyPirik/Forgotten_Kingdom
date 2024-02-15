const { getAllEnemies, getBlockEnemies, postEnemy, putEnemy, deleteEnemy } = require('../../Controllers/gameController/enemyController');
const { userAuth } = require('../../middlewares/auth');

const enemyRouter = require('express').Router({ mergeParams: true });

// playerRouter.use(userAuth)

enemyRouter.get('/', getAllEnemies);
enemyRouter.get('/:blockX/:blockY', getBlockEnemies);

enemyRouter.post('/', postEnemy);

enemyRouter.put('/:enemy_id', putEnemy);

enemyRouter.delete('/:enemy_id', deleteEnemy);

module.exports = enemyRouter;