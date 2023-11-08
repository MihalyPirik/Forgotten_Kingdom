const router=require('express').Router()
const db=require('./database')
const validator=require('express-validator')


router.post('/regisztracio',(req,res)=>{
    console.log('a')
    const email=req.body.email
    const password=req.body.password
    const name=req.body.name

    console.log(email)
    console.log(password)
    console.log(name)
})

module.exports=router