const Player = require("../../models/player")

const getAllData=async(req,res,next)=>
{
const data=await Player.findOne({where:{player_id:req.params.playerId},attributes:{exclude:['player_id','password','email']}})
res.status(200).json({"data":data})
}

module.exports={getAllData}