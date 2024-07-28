require("dotenv").config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

const sendEmail = async (req, res, next) => {
  try {
    const { from, subject, text } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `${subject} - ${from}`,
      text: text,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Sikeres a report küldése!');
  } catch (error) {
    res.status(500).send('A report nem került elküldésre!');
  }
};

module.exports = {
  sendEmail,
};
