// Egyenlőre csak localhost
const hostData={
    host:"localhost",
    user:"root",
    password:"admin",
    port:3306,
    databse:"ForgottenKingdom"
}




const mysql=require('mysql')
const c=mysql.createConnection({
  host: hostData.host,
  user: hostData.user,
  port: hostData.port,
  password: hostData.password,
  database: hostData.databse
})
c.connect(function (error) {
  if (error) {
      console.log("Error in the connection")
    //   console.log(err)
    // Egyéb feltételek (használt felhasználónév stb..)
  }
  else {
    c.query("",function (error, result){
        if (error){}
        else{}
    }
        )
            }
})