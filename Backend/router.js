const router=require('express').Router()
const Query=require('./database')
const {check,validationResult}=require('express-validator')


router.post('/regisztracio',[
    check('email','Nem megfelelő email cím').not().isEmpty().isEmail().escape(),
    check('name','A név megadása kötelező').not().isEmpty().escape(),
    check('password','Jelszó megadása kötelező').not().isEmpty().escape()
],async(req,res)=>{



    try {
        const email=req.body.email
     const password=req.body.password
     const name=req.body.name
        const errors=validationResult(req)
        if(!errors.isEmpty())
        {
            throw {"message": errors.array()}
        }
    
             Query(`INSERT INTO players (HP,player_name,email,password,world_name) VALUES ('100','${name}','${email}','${password}','valami')`,
            (serverError,error)=>
            {
                if(serverError){res.status(500).send('Hálózati hiba!')}
                if(error){res.status(400).send('Ez az email cím már foglalt!')}
            })
    } catch (e) {
        res.status(400).send(e.message)
    }

})

router.post('/login',
[check('email','Az email megadása kötelező').not().isEmpty(),
check('password','A jelszó megadása kötelező').not().isEmpty()
],(req,res)=>{
    try {
        const errors=validationResult(req)
        if(!errors.isEmpty())
        {
            throw {"message": errors.array()}
        }
        const email=req.body.email
        const password=req.body.password
        Query(`SELECT player_id FROM players WHERE email='${email}' AND password='${password}'`,(serverError,error,result)=>
        {
            if(serverError){res.status(500).send('Hálózati hiba!')}
            if(error){res.status(400).send(error)}
            if(result){res.status(200).send(result)}
        })
    } catch (e) {
        res.status(400).send(e.message)
    }
})

module.exports=router