const { getEnemies } = require('../../Controllers/gameController/enemyController')

const enemyRouter = require('express').Router({ mergeParams: true })

enemyRouter.get('/:blockX/:blockY', getEnemies)

module.exports = enemyRouter