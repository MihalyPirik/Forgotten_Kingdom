const Player = require("../../models/player")
const Enemy= require('../../models/enemy')
const Resident= require('../../models/resident')
const QuestStatistics= require('../../models/questStatistics')
const EnemyType= require('../../models/enemyType')
const Quest=require('../../models/quest')
const getAllData=async(req,res,next)=>
{
    try {
        const data=await Player.findOne({where:{player_id:req.params.playerId},attributes:{exclude:['player_id','password','email']}})
        res.status(200).json({"data":data}) 
    } catch (error) {
        next(error)
    }

}

// tools, enemies, residents, quest statistics
const getEnemies=async(req,res,next)=>
{
    try {
        const data=await Enemy.findAll({where:{world_id:req.params.playerId},attributes:{exclude:['world_id']},include:{model:EnemyType}})
        res.status(200).json({"data":data})
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const getResidents=async(req,res,next)=>
{
    try {
        const data=await Resident.findAll({where:{world_id:req.params.playerId},attributes:{exclude:['world_id'],include:Quest}})
        res.status(200).json({"data":data})
    } catch (error) {
        next(error)
    }
}

const getQuests=async(req,res,next)=>
{
    try {
        const data=await QuestStatistics.findAll({where:{player_id:req.params.playerId},include:Quest})
        res.status(200).json({"data":req.params.playerId})
    } catch (error) {
        next(error)
    }
}

const getInventory=async(req,res,next)=>
{
    try {
        const data=await Player.findByPk(req.params.playerId)
        res.status(200).json({"data":data})
    } catch (error) {
        next(error)
    }
}
module.exports={getAllData,getEnemies,getResidents,getQuests,getInventory}