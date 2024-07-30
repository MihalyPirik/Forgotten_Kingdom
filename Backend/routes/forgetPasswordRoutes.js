const { forgetPassword, resetPassword } = require('../Controllers/forgetPasswordController');

const forgetPasswordRouter = require('express').Router();

forgetPasswordRouter.get('/reset-password', resetPassword);
forgetPasswordRouter.post('/forget-password', forgetPassword);

module.exports = forgetPasswordRouter;