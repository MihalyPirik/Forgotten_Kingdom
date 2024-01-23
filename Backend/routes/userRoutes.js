const userRouter=require('express').Router()


const { body}=require('express-validator')
const { login, registration } = require('../Controllers/userController')


userRouter.post('/registration',
[
    body('name','A név megadása kötelező!').not().isEmpty().escape(),
    body('email',"Az email cím megadása kötelező!").not().isEmpty().escape(),
    body('email','Nem megfelelő email cím!').isEmail().escape(),
    body('password','Jelszó megadása kötelező!').not().isEmpty().escape(),
    body('password',`A jelszónak ${8} és ${20} karakter között kell lennie!`).isLength({min:8,max:20}).escape()
],
registration)

userRouter.post('/login',
[
    body('email',"Az email cím megadása kötelező!").not().isEmpty().escape(),
    body('email','Nem megfelelő email cím!').isEmail().escape(),
    body('password','Jelszó megadása kötelező!').not().isEmpty().escape(),
],
login)



module.exports=userRouter