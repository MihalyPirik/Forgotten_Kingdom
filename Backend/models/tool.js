const dbConnection = require("../services/dbService")

const Tool = dbConnection.define
    (
        'Tool', {},
        {
            tableName: 'tools',
            timestamps: false
        }
    )
Tool.associate = (models) => {
    Tool.belongsTo(models.Player, { foreignKey: 'player_id' })
    Tool.belongsTo(models.ToolType, { foreignKey: 'tool_type_id' })
}
module.exports = Tool