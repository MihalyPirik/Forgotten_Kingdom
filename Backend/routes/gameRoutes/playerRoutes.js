const { getAllData } = require('../../controllers/gameController/playerController')
const { userAuth } = require('../../middlewares/auth')

const playerRouter=require('express').Router({mergeParams:true})

playerRouter.use(userAuth)

playerRouter.get('/',getAllData)

module.exports=playerRouter