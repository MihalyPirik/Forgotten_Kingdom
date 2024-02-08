const { getAllEnemies, getBlockEnemies, PostEnemy } = require('../../Controllers/gameController/enemyController')

const enemyRouter = require('express').Router({ mergeParams: true })

enemyRouter.get('/', getAllEnemies)
enemyRouter.get('/:blockX/:blockY', getBlockEnemies)

enemyRouter.post('/', PostEnemy)

module.exports = enemyRouter