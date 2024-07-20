const express = require('express');
const { sendEmail } = require('../Controllers/emailController');

const emailRouter = express.Router();

emailRouter.post('/', sendEmail);

module.exports = emailRouter;
