const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")
const QuestType = require("./questType")

const Quest = dbConnection.define
    (
        'Quest',
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
            tableName: 'quests',
            hooks:
            {
                beforeCreate: async (quest) => {
                    const quest_type = await QuestType.findOne({where: {quest_id: quest.quest_id}});
                    if (quest_type) {
                        quest.currentProgress = quest_type.currentProgress,
                        quest.targetProgress = quest_type.targetProgress,
                        quest.is_completed = quest_type.is_completed
                    }
                }
            },
        }
    )
    Quest.associate = (models) => {
        Quest.belongsTo(models.Player, { foreignKey: 'player_id' })
        Quest.belongsTo(models.QuestType, { foreignKey: 'quest_id' })
}

module.exports = Quest
