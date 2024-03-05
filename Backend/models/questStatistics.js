const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")

const QuestStatistics = dbConnection.define
    (
        'QuestStatistics',
        {
            is_completed:
            {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            is_active:
            {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            }
        },
        {
            tableName: 'quest_statistics',
        }
    )
QuestStatistics.associate = (models) => {
    QuestStatistics.belongsTo(models.Quest, { foreignKey: 'quest_id' })
    QuestStatistics.belongsTo(models.Player, { foreignKey: 'player_id' })
}
module.exports = QuestStatistics
