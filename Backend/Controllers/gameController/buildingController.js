const Building = require("../../models/building");
const BuildingType = require("../../models/buildingType");
const uuid = require("uuid");

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

const postBuilding = async (req, res, next) => {
  try {
    const world_id = req.token.id;
    
    const building_type_id = req.body.building_type_id;
    await Building.create({
      building_id: uuid.v1(),
      world_id: world_id,
      building_type_id: building_type_id
    });

    res.status(201).json({ data: {message: "Sikeres felvétel!"} });
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

    res.status(200).json({ data: {message: "Sikeres módosítás!"} });
  } catch (error) {
    next(error);
  }
};

const deleteBuilding = async (req, res, next) => {
  try {
    const isDeleted = await Building.destroy({ where: { building_id: req.params.building_id } });

    if (isDeleted == 0) {
      return res.status(404).json({ message: "Ilyen épület nem létezik!" })
    }
    res.status(200).json({ data: {message: "Sikeres törlés!"} });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBuildings,
  postBuilding,
  putBuilding,
  deleteBuilding
};
