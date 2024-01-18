const router=require('express').Router()

const Query = require('./Controllers/dbConnection')
const { registration } = require('./Controllers/userController')
const { body}=require('express-validator')


router.post('/registration',[
    body('name','A név megadása kötelező!').not().isEmpty().escape(),
    body('email',"Az email cím megadása kötelező!").not().isEmpty(),
    body('email','Nem megfelelő email cím!').isEmail().escape(),
    body('password','Jelszó megadása kötelező!').not().isEmpty().escape(),
    body('password','A jelszónak 8 és 20 karakter között kell lennie!').isLength({min:8,max:20})
],(req,res)=>{registration(req,res)})

router.post('/login',
[body('email','Az email megadása kötelező').not().isEmpty(),
body('password','A jelszó megadása kötelező').not().isEmpty()
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