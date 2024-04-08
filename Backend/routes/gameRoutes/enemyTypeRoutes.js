const { getAllEnemyTypes } = require('../../controllers/gameController/enemyTypeController');
const { userAuth } = require('../../middlewares/auth');

const enemyTypeRouter = require('express').Router({ mergeParams: true });

enemyTypeRouter.use(userAuth)

enemyTypeRouter.get('/',getAllEnemyTypes)

module.exports=enemyTypeRouter