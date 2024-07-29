const dbConnection = require('../services/dbService');
const { DataTypes } = require('sequelize');

const Inventory = dbConnection.define(
    'Inventory',
    {
        amount: DataTypes.INTEGER
    },
    {
        tableName: 'inventory'
    }
)

module.exports = Inventory;