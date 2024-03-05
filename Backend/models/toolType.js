const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")


const ToolType = dbConnection.define
    (
        'ToolType',
        {
            tool_type_id:
            {
                type: DataTypes.UUID,
                primaryKey: true
            },
            tool_name:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
            level:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate:
                {
                    min: 1,
                    max: 3
                }
            },
            attack:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            tableName: 'tool_types',
        }
    )
ToolType.associate = (models) => {
    ToolType.belongsToMany(models.Player, { through: models.Tool, foreignKey: "tool_type_id" })
    ToolType.hasMany(models.Tool, { foreignKey: 'tool_type_id' })
}
module.exports = ToolType