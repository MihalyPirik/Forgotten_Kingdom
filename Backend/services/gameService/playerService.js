const { pool } = require("../dbService");

const getAllData_db=async(playerId)=>
{
    const data=await pool.query('SELECT * FROM players WHERE player_id=?'
    ,[playerId])
    return data[0][0]
}

module.exports={getAllData_db}