const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")

const QuestStat = dbConnection.define
    (
        'QuestStat',
        {
            is_completed:
            {
                type: DataTypes.BOOLEAN,
                defaultValue: false
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
                defaultValue: 0
            }
        },
        {
            tableName: 'quest_stat'
        }
    )
    QuestStat.associate = (models) => {
        QuestStat.hasOne(models.Resident, { foreignKey: 'quest_id'})
        QuestStat.belongsTo(models.Player, { foreignKey: 'player_id', onDelete: 'CASCADE' })
        QuestStat.belongsTo(models.Quest, { foreignKey: 'quest_id' })
}

module.exports = QuestStat
