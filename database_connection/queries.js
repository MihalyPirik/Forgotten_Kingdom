// Egyenlőre csak localhost
const hostData={
    host:"localhost",
    user:"root",
    password:"admin",
    port:3306,
    databse:"ForgottenKingdom"
}


export const registration=(name,password)=>{
  
}
const mysql=require('mysql')
const c=mysql.createConnection(hostData)


c.connect(function (error) {
  if (error) {
    
  }
  else {
    c.query("",function (error, result){
        if (error){// Egyéb feltételek (használt felhasználónév stb..)
        }
        else{}
    }
        )
            }
})