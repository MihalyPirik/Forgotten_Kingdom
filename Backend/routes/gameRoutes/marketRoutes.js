const { getAllOffer, getAllPlayerOffer, postOffer, putOffer, deleteOffer } = require('../../Controllers/gameController/marketController');
const { userAuth } = require('../../middlewares/auth');

const marketRouter = require('express').Router({ mergeParams: true });

// marketRouter.use(userAuth)

marketRouter.get('/', getAllOffer);
marketRouter.get('/:player_id', getAllPlayerOffer);

marketRouter.post('/:player_id', postOffer);

marketRouter.put('/:player_id/:offer_id', putOffer);

marketRouter.delete('/:player_id/:offer_id', deleteOffer);

module.exports = marketRouter;