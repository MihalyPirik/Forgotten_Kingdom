const { getAllBuildings, postBuilding, putBuilding, deleteBuilding } = require('../../Controllers/gameController/buildingController')
const { userAuth } = require('../../middlewares/auth')

const buildingRouter = require('express').Router({ mergeParams: true })

buildingRouter.use(userAuth)

buildingRouter.get('/', getAllBuildings)

buildingRouter.post('/', postBuilding)

buildingRouter.put('/:building_id', putBuilding)

buildingRouter.delete('/:building_id', deleteBuilding)

module.exports = buildingRouter