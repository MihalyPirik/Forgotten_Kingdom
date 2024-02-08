const Enemy = require('../../models/enemy')
const EnemyType = require('../../models/enemyType')
const uuid = require('uuid')

const getAllEnemies = async (req, res, next) => {
    try {
        const data = await Enemy.findAll({ attributes: { exclude: ['world_id'] }, include: { model: EnemyType } })
        res.status(200).json({ "data": data })
    } catch (error) {
        console.log("err:", error);
        next(error)
    }
}

const getBlockEnemies = async (req, res, next) => {
    try {
        const data = await Enemy.findAll({ where: { blockX: req.params.blockX, blockY: req.params.blockY }, attributes: { exclude: ['world_id'] }, include: { model: EnemyType } })
        res.status(200).json({ "data": data })
    } catch (error) {
        next(error)
    }
}

const PostEnemy = async (req, res, next) => {
    try {
        const objX = req.body.objX
        const objY = req.body.objY
        const blockX = req.body.blockX
        const blockY = req.body.blockY
        const world_id = req.body.world_id
        const enemy_type_id = req.body.enemy_type_id
        await Enemy.create({ enemy_id: uuid.v1(), objX: objX, objY: objY, blockX: blockX, blockY: blockY, world_id: world_id, enemy_type_id: enemy_type_id })
        
        res.status(201).json({ "message": "Sikeres felvétel!" })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllEnemies, getBlockEnemies, PostEnemy }