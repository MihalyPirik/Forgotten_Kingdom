const mysql = require('mysql2/promise')
const hostData = {
  host: "bgs.jedlik.eu",
  user: "forgottenkingdom",
  password: "eON1rgxuMmRo]eJH",
  port: 3306,
  database: "forgottenkingdom",
  connectionLimit:100
}
const pool = mysql.createPool(hostData)



const postUser=async(name,email,password)=>
{
  return await pool.query("INSERT INTO players (HP,player_name,email,password,world_name) VALUES ('100',?,?,?,'valami')", [name, email, password])
}



module.exports={postUser}