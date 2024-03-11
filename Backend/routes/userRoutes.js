const { postRegistration, postLogin, putUser } = require('../controllers/userController');
const { userAuth } = require('../middlewares/auth');

const userRouter = require('express').Router();

userRouter.post('/registration', postRegistration);
userRouter.post('/login', postLogin);

// userRouter.put('/:player_id', putUser);
userRouter.put('/', userAuth, putUser);


module.exports = userRouter;