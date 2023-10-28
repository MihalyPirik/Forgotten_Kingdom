// Egyenlőre csak localhost
const hostData = {
  host: "localhost",
  user: "root",
  password: "admin",
  port: 3306,
  databse: "forgottenkingdom"
}

export const registration = (email, password) => {

  if (error) {
    console.log(error)
  }
  else {
    c.query(`INSERT INTO players ('player_id','player_name','email','password','world_id','world-name') 
    VALUES (1,'dsgdfg',${email},${password},1,'world')`, function (error, result) {
      if (error) {
        console.log(error.message)
      }
      else { console.log(result[0]) }
      c.end()
    }
    )
  }
}
const mysql = require('mysql')
const c = mysql.createConnection(hostData)


c.connect(function (error) {
  if (error) {
    console.log(error)
  }
  else {
    c.query("", function (error, result) {
      if (error) {
        console.log(error.message)
      }
      else { console.log(result[0]) }
      c.end()
    }
    )
  }
})
