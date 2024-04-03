const { Sequelize,DataTypes } = require('sequelize');
// const Enemy=require('../models/enemy')
// const EnemyType=require('../models/enemyType')
// const Player=require('../models/player')
// const Quest=require('../models/quest')
// const QuestStatistics=require('../models/questStatistics')
// const Resident=require('../models/resident')
// const ToolType=require('../models/toolType')
require('dotenv').config();


const dbConnection=new Sequelize
(
  {
    host:process.env.DB_HOST,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:process.env.DB_PORT,
    dialect:'mysql',
    define: {
      timestamps: false
    }
  }
)
const Test=async()=>
{
try {
  await dbConnection.authenticate()
  console.log("Database connected at port "+process.env.DB_PORT);
} catch (error) {
  console.log("Unable to connect to database!\n"+error);
}
}

Test()
// const models=
// {
//     Enemy:Enemy(dbConnection),
//     EnemyType:EnemyType(dbConnection),
//     Player:Player(dbConnection),
//     Quest:Quest(dbConnection),
//     QuestStatistics:QuestStatistics(dbConnection),
//     Resident:Resident(dbConnection),
//     ToolType:ToolType(dbConnection)
// }
// for (const key in models) {
//     if (models[key].hasOwnProperty('associate')) {
//         models[key].associate(models)
// }
// }

module.exports=dbConnection;

// const postUser=async(name,email,password)=>
// {
//   return await pool.query("INSERT INTO players (HP,player_name,email,password,world_name) VALUES ('100',?,?,?,'valami')", [name, email, password])
// }

// const getUser=async(email)=>
// {
//   const data=await pool.query("SELECT * FROM players WHERE email=?",[email])
//   return data[0][0]
// }
// try {
//dbConnection.sync({alter: true})
// } catch (error) {
//   console.log(error.parent);
// }