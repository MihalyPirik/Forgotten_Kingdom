const router=require('express').Router()
const db=require('./database')
const validator=require('express-validator')


router.post('/regisztracio',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const name=req.body.name
    db.registration(email,password,name)
    res.send('Sikeres regisztráció!')
})

module.exports=router