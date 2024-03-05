const { DataTypes } = require("sequelize")
const dbConnection = require("../services/dbService")

const Resident = dbConnection.define
    (
        'Resident',
        {
            // resident_id resident_name profession world_id quest_id objX objY blockX blockY	
            resident_id:
            {
                type: DataTypes.UUID,
                primaryKey: true
            },
            resident_name:
            {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            profession:
            {
                type: DataTypes.STRING,
            },
            objX:
            {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            objY:
            {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            blockX:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            blockY:
            {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            tableName: 'residents',
        }
    )
Resident.associate = (models) => {
    Resident.belongsTo(models.Player, { foreignKey: "world_id" })
    Resident.belongsTo(models.Quest, { foreignKey: "quest_id" })
}
module.exports = Resident