const { postRegistration, postLogin, putUser } = require('../Controllers/userController');
const { userAuth } = require('../middlewares/auth');

const userRouter = require('express').Router();

userRouter.post('/registration', postRegistration);
userRouter.post('/login', postLogin);

userRouter.put('/:player_id', putUser);
// userRouter.put('/:player_id', userAuth, putUser);


module.exports = userRouter;