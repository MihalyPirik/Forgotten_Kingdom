const { DataTypes } = require('sequelize');
const dbConnection = require('../services/dbService');

const Tool = dbConnection.define
    (
        'Tool',
        {
            tool_id: {
                type: DataTypes.UUID,
                primaryKey: true,
            }
        },
        {
            tableName: 'tools',
        }
    )
Tool.associate = (models) => {
    Tool.belongsTo(models.Player, { foreignKey: 'player_id', onDelete: 'CASCADE' });
    Tool.belongsTo(models.ToolType, { foreignKey: 'tool_type_id' });
}
module.exports = Tool;