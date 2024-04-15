const Player = require("../../models/player");
const Market = require("../../models/market");
const Inventory = require("../../models/inventory");
const uuid = require("uuid");
const ProcessQuery = require('../../utils/queryProcessor')

const getAllOffer = async (req, res, next) => {
  try {

    const page = req.query.page || 1
    const limit = req.query.limit || 25
    const startIndex = (page - 1) * limit
    const data = await Market.findAll({
      attributes: { exclude: ["player_id"] },
      include: { model: Player, attributes: ["player_name"] },
      offset: startIndex,
      limit: limit,
      where: ProcessQuery(Market, req.query)
    });
    res.status(200).json({ data: data, page: req.query.page, count: data.length });
  } catch (error) {
    next(error);
  }
};

const getAllPlayerOffer = async (req, res, next) => {
  try {
    const player_id = req.token.id;
    console.log("token:", req.token.id);

    const data = await Market.findAll({
      where: {
        player_id: player_id,
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
    const player_id = req.token.id;

    const offeredType = req.body.offeredType;
    const offeredAmount = req.body.offeredAmount;
    const soughtType = req.body.soughtType;
    const soughtAmount = req.body.soughtAmount;
    console.log(offeredType);

    const player = await Inventory.findAll({
      where: {
        player_id: player_id,
      },
    });
  
    const currentAmount = player.find(item => item.item == offeredType).amount;
    console.log(currentAmount);

    if (!currentAmount) {
      return res.status(400).json({ data: { message: `Nincs ilyen alapanyagod!` } });
    }

    if (currentAmount < offeredAmount) {
      return res.status(400).json({ data: { message: `Nincs elég ${offeredType} az eladáshoz!` } });
    };

    const data = await Market.create({
      offer_id: uuid.v1(),
      offeredType: offeredType,
      offeredAmount: offeredAmount,
      soughtType: soughtType,
      soughtAmount: soughtAmount,
      player_id: player_id,
    });

    await Inventory.decrement(
      {
        "amount": offeredAmount
      },
      {
        where: {
          player_id: player_id,
          item: offeredType
        },
      }
    );

    res.status(201).json({ data: data });
  } catch (error) {
    next(error);
  }
};

const putOffer = async (req, res, next) => {
  try {
    const player_id = req.token.id;

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
          player_id: player_id,
          offer_id: req.params.offer_id
        },
      }
    );

    res.status(200).json({ data: { message: "Sikeres módosítás!" } });
  } catch (error) {
    next(error);
  }
};

const deleteOffer = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const offer = await Market.findByPk(req.params.offer_id);
    const player = await Inventory.findAll({
      where: {
        player_id: player_id,
      },
    });
    const currentAmount = player.find(item => item.item == offer.offeredType).amount;

    if (!currentAmount && currentAmount != 0) {
      return res.status(400).json({ data: { message: `Nincs ilyen alapanyagod!` } });
    }

    await Inventory.increment(
      {
        "amount": offer.offeredAmount
      },
      {
        where: {
          player_id: player_id,
          item: offer.offeredType
        },
      }
    );

    const isDeleted = await Market.destroy({
      where: { offer_id: req.params.offer_id },
    });
    if (isDeleted == 0) {
      return res.status(404).json({ message: "Ilyen ajánlat nem létezik!" });
    }
    res.status(200).json({ data: { message: "Sikeres törlés!" } });
  } catch (error) {
    next(error);
  }
};

const buyOffer = async (req, res, next) => {
  try {
    const buyer_id = req.token.id;
    const offer = await Market.findByPk(req.params.offer_id);
    const buyerPlayer = await Inventory.findAll({
      where: {
        player_id: buyer_id,
      },
    });
    const owner_id = offer.player_id;
    const soughtType = offer.soughtType;
    const soughtAmount = offer.soughtAmount;
    const currentAmount = buyerPlayer.find(item => item.item == soughtType).amount;

    if (!currentAmount && currentAmount != 0) {
      return res.status(400).json({ data: { message: `Nincs ilyen alapanyagod!` } });
    }

    if (currentAmount < soughtAmount) {
      return res.status(400).json({ data: { message: `Nincs elég ${soughtType} a vásárláshoz!` } });
    };

    await Inventory.increment(
      {
        "amount": soughtAmount
      },
      {
        where: {
          player_id: owner_id,
          item: soughtType
        },
      }
    );

    await Inventory.increment(
      {
        "amount": offer.offeredAmount,
      },
      {
        where: {
          player_id: buyer_id,
          item: offer.offeredType
        },
      }
    );

    await Inventory.decrement(
      {
        "amount": soughtAmount
      },
      {
        where: {
          player_id: buyer_id,
          item: soughtType
        },
      }
    );

    await Market.destroy({
      where: { offer_id: req.params.offer_id },
    });

    res.status(200).json({ data: { message: "Sikeres vásárlás!" } });

  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllOffer,
  getAllPlayerOffer,
  postOffer,
  putOffer,
  deleteOffer,
  buyOffer
};
