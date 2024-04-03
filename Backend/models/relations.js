const models =
{
    Item:require("./item"),
    Quest: require("./quest"),
    Resident: require("./resident"),
    Inventory:require('./inventory'),
    Enemy: require("./enemy"),
    EnemyType: require("./enemyType"),
    Market: require("./market"),
    Tool: require("./tool"),
    ToolType: require("./toolType"),
    QuestStat: require("./questStat"),
    Player: require("./player")
    
    
}
Object.keys(models).forEach(key => {

    if (models[key].hasOwnProperty('associate')) {
        models[key].associate(models)
    }
})