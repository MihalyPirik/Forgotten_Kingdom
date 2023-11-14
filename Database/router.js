const router=require('express').Router()
const {registration,getEmail}=require('./database')
const {check,validationResult}=require('express-validator')


router.post('/regisztracio',[
    check('email','Nem megfelelő email cím').not().isEmpty().isEmail(),
    check('name','A név megadása kötelező').not().isEmpty(),
    check('password','Jelszó megadása kötelező').not().isEmpty()
],(req,res)=>{
    let erros=validationResult(req)
    if(!erros.isEmpty())
    {
        res.send(erros.array())
    }
    else{
    const email=req.body.email
    const password=req.body.password
    const name=req.body.name

    getEmail(email,(error,result)=>{
        if(error){res.send(error)}
        else{
            if(!result.length){
            registration(email,password,name,(error)=>{
                if(error){res.send(error)}
                else{res.send('Sikeres regisztráció!')}
            })}else{res.send('Ezzel az email címmel már regisztráltak!')}
        }
    })
    
}})

module.exports=router