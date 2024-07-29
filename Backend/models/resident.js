const { DataTypes } = require('sequelize');
const dbConnection = require('../services/dbService');

const Resident = dbConnection.define
    (
        'Resident',
        {
            resident_id:
            {
                type: DataTypes.UUID,
                primaryKey: true
            },
            resident_name:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
            profession:
            {
                type: DataTypes.ENUM('Kereskedő', 'Kovács', 'Farmer', 'Szörnyvadász', 'Lovag', 'Mágus', 'Halász', 'Favágó', 'Boszorkány'),
                allowNull: false
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
            },
            isInterior: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            tableName: 'residents',
        }
    )
Resident.associate = (models) => {
    Resident.belongsTo(models.QuestStat, { foreignKey: 'quest_id' });
    Resident.belongsTo(models.Player, { foreignKey: 'world_id', onDelete: 'CASCADE' });
    // Resident.hasMany(models.Quest,{foreignKey:'target_resident'})
}
module.exports = Resident;