const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")


const Quest = dbConnection.define
    (
        'Quest',
        {
            quest_id:
            {
                type: DataTypes.UUID,
                primaryKey: true
            },
            quest_name:
            {
                type: DataTypes.STRING,
                defaultValue: "Küldetés"
            },
            description:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
            ismainstory:
            {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            currentProgress:
            {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            targetProgress:
            {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'quests',
        }
    )
Quest.associate = (models) => {
    Quest.belongsToMany(models.Player, { through: models.QuestStatistics, foreignKey: "quest_id" })
    Quest.hasMany(models.Resident, { foreignKey: "quest_id" })
    Quest.hasMany(models.QuestStatistics, { foreignKey: 'quest_id' })
}

module.exports = Quest