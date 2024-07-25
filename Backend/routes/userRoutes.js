const { postRegistration, verifyEmail, postLogin, putUser } = require('../Controllers/userController');
const { userAuth } = require('../middlewares/auth');

const userRouter = require('express').Router();

userRouter.get('/verify-email', verifyEmail);
userRouter.post('/registration', postRegistration);
userRouter.post('/login', postLogin);

// userRouter.put('/:player_id', putUser);
userRouter.put('/', userAuth, putUser);


module.exports = userRouter;