const { DataTypes } = require("sequelize");
const dbConnection = require("../services/dbService");

const BuildingType = dbConnection.define(
  "BuildingType",
  {
    building_type_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    building_name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
  },
  {
    tableName: "building_types",
    timestamps: false,
  }
);
BuildingType.associate = (models) => {
  BuildingType.belongsToMany(models.Player, { through: models.Building, foreignKey: "building_type_id" });
  BuildingType.hasMany(models.Building, { foreignKey: "building_type_id" });
};

module.exports = BuildingType;
