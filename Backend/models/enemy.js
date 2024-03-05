const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")
const EnemyType = require("./enemyType")


const Enemy = dbConnection.define
    (
        'Enemy',
        {
            enemy_id:
            {
                primaryKey: true,
                type: DataTypes.UUID
            },
            objX:
            {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            objY:
            {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            blockX:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            blockY:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            HP:
            {
                type: DataTypes.INTEGER,
                allowNull: true,
            }
        },
        {
            tableName: 'enemies',
            hooks:
            {
                beforeCreate: async (enemy) => {
                    const enemy_type = await EnemyType.findOne({where: {enemy_type_id: enemy.enemy_type_id}});
                    if (enemy_type) {
                        enemy.HP = enemy_type.HP
                    }
                }
            },
        }
    )
Enemy.associate = (models) => {
    Enemy.belongsTo(models.Player, { foreignKey: 'world_id' })
    Enemy.belongsTo(models.EnemyType, { foreignKey: 'enemy_type_id' })
}
module.exports = Enemy