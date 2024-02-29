const Building = require("../../models/building");
const BuildingType = require("../../models/buildingType");

const getAllBuildings = async (req, res, next) => {
  try {
    const data = await Building.findAll({
      attributes: { exclude: ["world_id", "building_type_id"] },
      include: { model: BuildingType, attributes: { exclude: ["building_type_id"] } },
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const putBuilding = async (req, res, next) => {
  try {
    const level = req.body.level;
    await Building.update(
      {
        level: level
      },
      {
        where: {
          building_id: req.params.building_id,
        },
        include: { model: BuildingType },
      }
    );

    res.status(200).json({ message: "Sikeres módosítás!" });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  getAllBuildings,
  putBuilding,
};
