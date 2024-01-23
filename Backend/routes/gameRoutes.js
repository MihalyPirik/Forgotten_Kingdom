const { userAuth } = require('../middlewares/auth')

const gameRouter=require('express').Router()

gameRouter.use(userAuth)

gameRouter.get('/user',(req,res)=>{res.status(200).json({"message":"Titkos adat!"})})
module.exports=gameRouter