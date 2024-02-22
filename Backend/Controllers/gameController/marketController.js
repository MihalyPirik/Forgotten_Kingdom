const Player = require("../../models/player");
const Market = require("../../models/market");
const uuid = require("uuid");

const getAllOffer = async (req, res, next) => {
  try {
    const data = await Market.findAll({
      attributes: { exclude: ["player_id"] },
      include: { model: Player, attributes: ["player_name"] },
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const getAllPlayerOffer = async (req, res, next) => {
  try {
    const data = await Market.findAll({
      where: {
        player_id: req.params.player_id,
      },
      attributes: { exclude: ["player_id"] },
      include: { model: Player, attributes: ["player_name"] },
    });
    res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const postOffer = async (req, res, next) => {
  try {
    const offeredType = req.body.offeredType;
    const offeredAmount = req.body.offeredAmount;
    const soughtType = req.body.soughtType;
    const soughtAmount = req.body.soughtAmount;;
    const player_id = req.body.player_id;
    await Market.create({
      offer_id: uuid.v1(),
      offeredType: offeredType,
      offeredAmount: offeredAmount,
      soughtType: soughtType,
      soughtAmount: soughtAmount,
      player_id: player_id,
    });

    res.status(201).json({ message: "Sikeres felvétel!" });
  } catch (error) {
    next(error);
  }
};

const putOffer = async (req, res, next) => {
  try {
    const offeredType = req.body.offeredType;
    const offeredAmount = req.body.offeredAmount;
    const soughtType = req.body.soughtType;
    const soughtAmount = req.body.soughtAmount;
    const updatedAt = req.params.updatedAt;
    await Market.update(
      {
        offeredType: offeredType,
        offeredAmount: offeredAmount,
        soughtType: soughtType,
        soughtAmount: soughtAmount,
        updatedAt: updatedAt,
      },
      {
        where: {
          player_id: req.params.player_id,
          offer_id: req.params.offer_id
        },
      }
    );

    res.status(200).json({ message: "Sikeres módosítás!" });
  } catch (error) {
    next(error);
  }
};

const deleteOffer = async (req, res, next) => {
  try {
    const isDeleted = await Market.destroy({
      where: { offer_id: req.params.offer_id },
    });
    if (isDeleted == 0) {
      return res.status(404).json({ message: "Ilyen ajánlat nem létezik!" });
    }
    res.status(200).json({ message: "Sikeres törlés!" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllOffer,
  getAllPlayerOffer,
  postOffer,
  putOffer,
  deleteOffer,
};
