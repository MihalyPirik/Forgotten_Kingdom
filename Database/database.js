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



const Query= (query,callback)=>
{
  pool.getConnection((serverError,conn)=>
  {
    if(serverError){callback(serverError)}

      conn.query(query,(err,result)=>{if(err){callback(null,err,null)}callback(null,null,result)})
      conn.release()
    }
  )
}

module.exports=Query