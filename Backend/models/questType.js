const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")


const QuestType = dbConnection.define
    (
        'QuestType',
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
                defaultValue: false,
                allowNull: false
            },
            targetProgress:
            {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            tableName: 'quest_types',
        }
    )
QuestType.associate = (models) => {
    QuestType.belongsToMany(models.Player, { through: models.Quest, foreignKey: "quest_id" })
    QuestType.hasMany(models.Quest, { foreignKey: 'quest_id'})
    QuestType.hasOne(models.Resident, { foreignKey: 'quest_id'})
}

module.exports = QuestType