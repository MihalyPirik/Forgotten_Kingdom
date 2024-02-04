const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")


    const ToolType=dbConnection.define
    (
        'ToolType',
        {
            tool_type_id:
            {
                type:DataTypes.UUID,
                primaryKey:true
            },
            tool_name:
            {
                type:DataTypes.STRING,
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
            },
            attack:
            {
                type:DataTypes.INTEGER,
                allowNull:false,
            }
        },
        {
            tableName:'tool_types',
            timestamps:false
        }
    )
ToolType.associate=(models)=>
{
    ToolType.belongsToMany(models.Player,{through:"tools",timestamps:false,foreignKey:"tool_type_id"})
}
module.exports=ToolType