const Enemy = require('../../models/enemy')
const EnemyType = require('../../models/enemyType')

const getEnemies = async (req, res, next) => {
    try {
        const data = await Enemy.findAll({ where: {  blockX: req.params.blockX, blockY: req.params.blockY }, attributes: { exclude: ['world_id'] }, include: { model:EnemyType } })
        res.status(200).json({ "data": data })
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = { getEnemies }