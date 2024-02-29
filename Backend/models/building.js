const { DataTypes } = require("sequelize");
const dbConnection = require("../services/dbService");

const Building = dbConnection.define(
  "Building",
  {
    building_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    tableName: "buildings",
    timestamps: false,
  }
);
Building.associate = (models) => {
  Building.belongsTo(models.Player, { foreignKey: "world_id" });
  Building.belongsTo(models.BuildingType, { foreignKey: "building_type_id" });
};

module.exports = Building;
