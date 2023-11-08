const mysql = require('mysql')
const hostData = {
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  port: 3306,
  databse: "forgottenkingdom"
}
const c = mysql.createConnection(hostData)

const ConnectionValidation=()=>{
  c.connect((error)=>{
    if(error){return error}
    else{return true}
  }
  )
}


const registration = (email, password, name) => {

  c.connect(function (error) {
    if (error) {
      return error.message
    }
    else {

      c.query(`insert into forgottenkingdom.players (player_id,player_name,email,password,world_id,world_name) values 
      ('1','${name}','${email}','${password}','1','valami')`,

        function (error) {
          if (error) {
            return error.message
          }
        }
      )
    }
  })
}

module.exports={registration}