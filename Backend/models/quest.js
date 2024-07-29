const { DataTypes } = require('sequelize');
const dbConnection = require('../services/dbService');
const Resident = require('./resident');

const Quest = dbConnection.define
    (
        'Quest',
        {
            quest_name:
            {
                type: DataTypes.STRING,
                primaryKey: true
            },
            mainstory_group: DataTypes.STRING,
            is_mainstory:
            {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
            category: {
                type: DataTypes.ENUM('Collector', 'Conversation', 'Exploring', 'Killer'),
                allowNull: false,
            },
            blockX: DataTypes.INTEGER,
            blockY: DataTypes.INTEGER,
            target_amount: DataTypes.INTEGER,
            target_resident: DataTypes.STRING

        },
        {
            tableName: 'quests'
        }
    )
Quest.associate = (models) => {
    Quest.belongsToMany(models.Player, { through: { model: models.QuestStat, unique: false }, foreignKey: 'quest_id' });
    Quest.hasMany(models.QuestStat, { foreignKey: 'quest_id' });
    Quest.belongsTo(models.Item, { foreignKey: 'item' });
    Quest.belongsTo(models.EnemyType, { foreignKey: 'enemy_type' });
    // Quest.belongsTo(models.Resident,{foreignKey:'target_resident'})
}

module.exports = Quest;