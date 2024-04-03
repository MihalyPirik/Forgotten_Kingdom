const { DataTypes } = require("sequelize");
const dbConnection = require("../services/dbService");

const Item = dbConnection.define(
    'Item',
    {
        name:
        {
            type: DataTypes.STRING,
            primaryKey:true,
            validate:{
                isIn:[["stone","wood","coal","fish","wheat","iron"]]
            }
        }
    },
    {
        tableName:'items'
    }
)

Item.associate = (models) =>
{
    
    Item.hasMany(models.Quest,{foreignKey:'item'})
    Item.belongsToMany(models.Player,{through:models.Inventory,foreignKey:'item'})
}

module.exports = Item