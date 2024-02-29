const { getAllBuildings, putBuilding } = require('../../Controllers/gameController/buildingController');
const { userAuth } = require('../../middlewares/auth');

const buildingRouter = require('express').Router({ mergeParams: true });

// buildingRouter.use(userAuth)

buildingRouter.get('/', getAllBuildings);

buildingRouter.put('/:building_id', putBuilding)

module.exports = buildingRouter;