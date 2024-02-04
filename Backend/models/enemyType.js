const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")




    const EnemyType=dbConnection.define
    (
        'EnemyType',
        {
            enemy_type_id:
            {
                type:DataTypes.UUID,
                primaryKey:true
            },
            enemy_name:
            {
                type:DataTypes.STRING,
                allowNull:false
            },
            HP:
            {
                type:DataTypes.DOUBLE,
                allowNull:false
            },
            attack:
            {
                type:DataTypes.DOUBLE,
                allowNull:false
            },
            level:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:
                {
                    min:1,
                    max:5
                }
            }
        },
        {
            tableName:'enemy_types',
            timestamps:false
        }
    )
    EnemyType.associate=(models)=>
    {
        EnemyType.belongsToMany(models.Player,{through:models.Enemy,foreignKey:"enemy_type_id"})
    }

    module.exports=EnemyType