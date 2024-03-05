const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")
const Quest = require("./quest")

const QuestStatistics = dbConnection.define
    (
        'QuestStatistics',
        {
            is_completed:
            {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: true
            },
            is_active:
            {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            currentProgress:
            {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            targetProgress:
            {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            tableName: 'quest_statistics',
            hooks:
            {
                beforeCreate: async (quest) => {
                    const quest_type = await Quest.findOne({where: {quest_id: quest.quest_id}});
                    if (quest_type) {
                        quest.currentProgress = quest_type.currentProgress,
                        quest.targetProgress = quest_type.targetProgress,
                        quest.is_completed = quest_type.is_completed
                    }
                }
            },
        }
    )
QuestStatistics.associate = (models) => {
    QuestStatistics.belongsTo(models.Quest, { foreignKey: 'quest_id' })
    QuestStatistics.belongsTo(models.Player, { foreignKey: 'player_id' })
}
module.exports = QuestStatistics
