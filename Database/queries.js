// Egyenlőre csak localhost
const hostData={
    host:"localhost",
    user:"root",
    password:"admin",
    port:3306,
    databse:"forgottenkingdom"
}

const registration=(name,password)=>{
  
}
const mysql=require('mysql')
const c=mysql.createConnection(hostData)


c.connect(function (error) {
  if (error) {
    console.log(error)
  }
  else {
    c.query("",function (error, result){
        if (error){
        console.log(error.message)
        }
        else{console.log(result[0].player_id)}
        c.end()
    }
        )
            }
})
