const { postRegistration, postLogin, putUser } = require('../Controllers/userController')

const userRouter = require('express').Router()

userRouter.put('/:player_id', putUser)

userRouter.post('/registration', postRegistration)
userRouter.post('/login', postLogin)


module.exports = userRouter