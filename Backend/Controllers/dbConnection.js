const mysql = require('mysql')
const hostData = {
  host: "bgs.jedlik.eu",
  user: "forgottenkingdom",
  password: "eON1rgxuMmRo]eJH",
  port: 3306,
  database: "forgottenkingdom",
  connectionLimit:50
}
const conn = mysql.createConnection(hostData)



const Query= (query,values)=>
{
  conn.query(query,values)
}

module.exports=Query