

// EnemyType.belongsToMany(Player,{through:Enemy,foreignKey:"enemy_type_id"})
// Player.belongsToMany(ToolType,{through:"tools",timestamps:false,foreignKey:"player_id"})
// Player.belongsToMany(Quest,{through:QuestStatistics,foreignKey:"player_id"})
// Player.belongsToMany(EnemyType,{through:Enemy,foreignKey:"world_id"})
// Player.hasMany(Resident,{foreignKey:"world_id"})
// Quest.belongsToMany(Player,{through:QuestStatistics,foreignKey:"quest_id"})
// Quest.hasMany(Resident,{foreignKey:"quest_id"})
// Resident.belongsTo(Player,{foreignKey:"world_id"})
// Resident.belongsTo(Quest,{foreignKey:"quest_id"})


const models =
{
    Enemy: require("./enemy"),
    EnemyType: require("./enemyType"),
    Player: require("./player"),
    Quest: require("./quest"),
    QuestStatistics: require("./questStatistics"),
    Resident: require("./resident"),
    ToolType: require("./toolType"),
    Tool: require("./tool")
}

Object.keys(models).forEach(key => {

    if (models[key].hasOwnProperty('associate')) {
        models[key].associate(models)
    }
})
// ToolType.belongsToMany(Player,{through:"tools",timestamps:false,foreignKey:"tool_type_id"})
