const { getAllData_db } = require("../../services/gameService/playerService")

const getAllData_c=async( req,res,next)=>
{
    try {
        const data=await getAllData_db(req.params.playerId)
        res.status(200).json({data:data})
    } catch (error) {
        next()
    }

}

module.exports={getAllData_c}