const { getAllOffer, getAllPlayerOffer, postOffer, putOffer, deleteOffer } = require('../../Controllers/gameController/marketController');
const { userAuth } = require('../../middlewares/auth');

const marketRouter = require('express').Router({ mergeParams: true });

marketRouter.use(userAuth)

marketRouter.get('/', getAllOffer);
marketRouter.get('/playerOffer', getAllPlayerOffer);

marketRouter.post('/', postOffer);

marketRouter.put('/:offer_id', putOffer);

marketRouter.delete('/:offer_id', deleteOffer);

module.exports = marketRouter;