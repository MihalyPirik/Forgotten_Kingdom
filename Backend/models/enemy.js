const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")


    const Enemy=dbConnection.define
    (
        'Enemy',
        {
            enemy_id:
            {
                type:DataTypes.UUID,
                primaryKey:true
            },
            objX:
            {
                type:DataTypes.DOUBLE,
                allowNull:false,
                defaultValue:0
            },
            objY:
            {
                type:DataTypes.DOUBLE,
                allowNull:false,
                defaultValue:0
            },
            blockX:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            },
            blockY:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:0
            }
        },
        {
            tableName:'enemies',
            timestamps:false,
        }
    )
    Enemy.associate=(models)=>
    {
        Enemy.belongsTo(models.Player,{foreignKey:'world_id'})
    Enemy.belongsTo(models.EnemyType,{foreignKey:'enemy_type_id'})
    }
module.exports=Enemy