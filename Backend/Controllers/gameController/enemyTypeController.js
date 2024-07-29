const EnemyType = require('../../models/enemyType');
const QueryProcessor = require('../../utils/queryProcessor');

const getAllEnemyTypes = async (req, res, next) => {
    try {
        const data = await EnemyType.findAll({ where: QueryProcessor(EnemyType, req.query) });
        res.status(200).json({ data: data })
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAllEnemyTypes
};