const { getAllEnemies, getBlockEnemies, postEnemy, putEnemy, deleteEnemy } = require('../../Controllers/gameController/enemyController')

const enemyRouter = require('express').Router({ mergeParams: true })

enemyRouter.get('/', getAllEnemies)
enemyRouter.get('/:blockX/:blockY', getBlockEnemies)

enemyRouter.post('/', postEnemy)

enemyRouter.put('/:enemy_id', putEnemy)

enemyRouter.delete('/:enemy_id', deleteEnemy)

module.exports = enemyRouter