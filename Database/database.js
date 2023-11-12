const mysql = require('mysql')
const hostData = {
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  port: 3306,
  database: "forgottenkingdom"
}
const c = mysql.createConnection(hostData)





const registration = (email, password, name, callback) => {

      c.query(`INSERT INTO players (HP,player_name,email,password,world_name) VALUES ('100','${name}','${email}','${password}','valami')`
      ,(error)=>{callback(error)})
   
  
}

const getAllEmail=(callback)=>{
  c.query('SELECT email FROM players',
  (error,result)=>{callback(error,result)})
}

module.exports={
  registration,
  getAllEmail
}