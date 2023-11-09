const mysql = require('mysql')
const hostData = {
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  port: 3306,
  databse: "forgottenkingdom"
}
const c = mysql.createPool(hostData)






const registration = (email, password, name) => {
  c.getConnection(
    (error)=>{
    if(error){console.log(error)}
    else{
      c.query(`INSERT INTO forgottenkingdom.players (HP,player_name,email,password,world_id,world_name) VALUES ('100','${name}','${email}','${password}','1','valami')`
      ,(error)=>{console.log(error)})
    }
  }
  )
  
}


module.exports={registration}