
const { getAllData_c } = require('../../controllers/gameController/playerController')
const { userAuth } = require('../../middlewares/auth')

const playerRouter=require('express').Router()

playerRouter.use(userAuth)

playerRouter.route('/player/:playerId')
.get('/',getAllData_c)

module.exports=playerRouter