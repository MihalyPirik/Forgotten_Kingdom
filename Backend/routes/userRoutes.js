const { postRegistration, postLogin } = require('../Controllers/userController');

const userRouter = require('express').Router();

userRouter.post('/registration', postRegistration);
userRouter.post('/login', postLogin);


module.exports = userRouter;