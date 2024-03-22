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
            is_mainstory:
            {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
            currentProgress:
            {
                type: DataTypes.INTEGER,
                defaultValue: 0,
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
                        quest.targetProgress = quest_type.targetProgress,
                        quest.is_mainstory = quest_type.is_mainstory
                    }
                }
            },
        }
    )
    Quest.associate = (models) => {
        Quest.belongsTo(models.Player, { foreignKey: 'player_id', onDelete: 'CASCADE' })
        Quest.belongsTo(models.QuestType, { foreignKey: 'quest_id' })
}

module.exports = Quest
