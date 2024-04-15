const { getAllOffer, getAllPlayerOffer, postOffer, putOffer, deleteOffer, buyOffer } = require('../../Controllers/gameController/marketController');
const { userAuth } = require('../../middlewares/auth');
const {ProcessQuery} = require('../../middlewares/query')
const marketRouter = require('express').Router({ mergeParams: true });

marketRouter.use(userAuth)

marketRouter.get('/', ProcessQuery, getAllOffer);
marketRouter.get('/playerOffer', getAllPlayerOffer);

marketRouter.post('/', postOffer);

marketRouter.put('/:offer_id', putOffer);
marketRouter.put('/buy/:offer_id', buyOffer);

marketRouter.delete('/:offer_id', deleteOffer);

module.exports = marketRouter;