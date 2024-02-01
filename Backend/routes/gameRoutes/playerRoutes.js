
const { getAllData_c } = require('../../controllers/gameController/playerController')
const { userAuth } = require('../../middlewares/auth')

const playerRouter=require('express').Router({mergeParams:true})

playerRouter.use(userAuth)

playerRouter.get('/',getAllData_c)

module.exports=playerRouter