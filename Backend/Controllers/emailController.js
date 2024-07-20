const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: '', // email
    pass: '', // kulcs
  },
});

const sendEmail = async (req, res, next) => {
  try {
    const { from, subject, text } = req.body;

    const mailOptions = {
      from: '', // email
      to: '', // email
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
