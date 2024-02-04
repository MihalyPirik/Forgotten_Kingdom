const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")

    const QuestStatistics=dbConnection.define
    (
        'QuestStatistics',
        {
            is_completed:
            {
                type:DataTypes.BOOLEAN,
                defaultValue:false,
                allowNull:false
            }
        },
        {
            tableName:'quest_statistics',
            timestamps:false
        }
    )
    module.exports=QuestStatistics
