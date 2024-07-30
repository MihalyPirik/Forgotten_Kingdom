const { sendEmail } = require('../Controllers/emailController');

const emailRouter = require('express').Router();

emailRouter.post('/', sendEmail);

module.exports = emailRouter;
