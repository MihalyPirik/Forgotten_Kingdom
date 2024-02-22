const { DataTypes } = require("sequelize");
const dbConnection = require("../services/dbService");

const Market = dbConnection.define(
  "Market",
  {
    offer_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    offeredType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    offeredAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    soughtType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    soughtAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "offers",
    timestamps: true
  }
);
Market.associate = (models) => {
  Market.belongsTo(models.Player, { foreignKey: "player_id" })
};

module.exports = Market;
