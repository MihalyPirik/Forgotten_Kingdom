const { getAllData, getEnemies, getResidents, getQuests, getInventory } = require('../../controllers/gameController/playerController')
const { userAuth } = require('../../middlewares/auth')

const playerRouter=require('express').Router({mergeParams:true})

// playerRouter.use(userAuth)

playerRouter.get('/',getAllData)
playerRouter.get('/enemies/:blockX/:blockY',getEnemies)
playerRouter.get('/residents/:blockX/:blockY',getResidents)
playerRouter.get('/quests',getQuests)
playerRouter.get('/inventory',getInventory)
module.exports=playerRouter