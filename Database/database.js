const mysql = require('mysql')
const hostData = {
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  port: 3306,
  database: "forgottenkingdom",
  connectionLimit:50
}
const pool = mysql.createPool(hostData)





const registration = (email, password, name, callback) => {

  pool.getConnection((error,conn)=>{
    if(error){callback(error)}
    else{conn.query(`INSERT INTO players (HP,player_name,email,password,world_name) VALUES ('100','${name}','${email}','${password}','valami')`
    ,(error)=>{callback(error)})}
    conn.release()
  })
      

}

const getEmail=(email,callback)=>{
  pool.query(`SELECT email FROM players WHERE email="${email}"`,
  (error,result)=>{callback(error,result)})
}

module.exports={
  registration,
  getEmail
}