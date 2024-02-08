const { registration, login } = require('../controllers/userController')

const userRouter = require('express').Router()



userRouter.post('/registration', registration)

userRouter.post('/login', login)


module.exports = userRouter