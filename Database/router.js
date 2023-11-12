const router=require('express').Router()
const db=require('./database')
const validator=require('express-validator')


router.post('/regisztracio',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const name=req.body.name
    let emails
    db.getAllEmail((error,result)=>{
        if(error){}
        else{email=result}
    })
    db.registration(email,password,name,(error)=>{
        if(error){res.status(402).send(error)}
        else{res.send('Sikeres regisztráció!')}
    })
})

module.exports=router