require('dotenv').config();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { Op } = require('sequelize');
const path = require('path');

const Player = require('../models/player');
const AuditTrail = require('../models/auditTrail');

const forgetPassword = async (req, res, next) => {
  const { email, newPassword, newPasswordAgain } = req.body;
  if (email == undefined || newPassword == undefined || newPasswordAgain == undefined) {
    return res.status(401).json({ message: 'Minden mező kitöltése kötelező!' });
  }
  if (newPassword != newPasswordAgain) {
    return res.status(401).json({ message: 'A két jelszó nem egyezik meg!' });
  }
  try {
    const user = await Player.findOne({ where: { email: email } });
    if (user) {
      if (user.email_verified) {
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000;
        user.newPassword = await bcrypt.hash(newPassword, await bcrypt.genSalt(10));
        await user.save();

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

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Jelszó módosítás',
          text: `Kérjük, kattintson a következő linkre a jelszó módosításához: http://127.0.0.1:3000/password/reset-password?token=${token}`,
        };

        await transporter.sendMail(mailOptions);

        await AuditTrail.create({
          player_id: user.player_id,
          event_type: 'RESETPASSWORD',
          event_time: new Date(),
          status: 'SUCCESS',
        });

        res.status(200).json({ message: 'E-mail elküldve a jelszó módosításához. Ellenőrizze az e-mail fiókját!' });
      } else {
        await AuditTrail.create({
          player_id: user.player_id,
          event_type: 'RESETPASSWORD',
          event_time: new Date(),
          status: 'Az email cím nincs hitelesítve!',
        });

        res.status(401).json({ message: 'Az email cím nincs hitelesítve!' });
      }
    } else {
      await AuditTrail.create({
        player_id: null,
        event_type: 'RESETPASSWORD',
        event_time: new Date(),
        status: 'Ilyen email címmel nincs regisztrálva felhasználó!',
      });

      res.status(401).json({ message: 'Ilyen email címmel nincs regisztrálva felhasználó!' });
    }
  } catch (error) {
    await AuditTrail.create({
      player_id: null,
      event_type: 'RESETPASSWORD',
      event_time: new Date(),
      status: `${error.message}`,
    });

    next(error);
  }
};

const resetPassword = async (req, res, next) => {
  const { token } = req.query;

  if (!token) {
    await AuditTrail.create({
      event_type: 'RESETPASSWORD_AUF',
      event_time: new Date(),
      status: 'Hiányzó token!'
    });

    return res.status(401).json({ message: 'Hiányzó token!' });
  }

  try {
    const user = await Player.findOne({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: {
          [Op.gt]: Date.now()
        }
      }
    });

    if (!user) {
      await AuditTrail.create({
        event_type: 'RESETPASSWORD_AUF',
        event_time: new Date(),
        status: 'Érvénytelen hitelesítő link!'
      });

      return res.sendFile(path.join(__dirname, '..', '..', 'Frontend/WebPage/public/answerPages/invalidLink.html'));
    }

    user.password = user.newPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    user.newPassword = null;

    await user.save();

    await AuditTrail.create({
      player_id: user.player_id,
      event_type: 'RESETPASSWORD_AUF',
      event_time: new Date(),
      status: 'SUCCESS'
    });

    res.sendFile(path.join(__dirname, '..', '..', 'Frontend/WebPage/public/answerPages/forgetPassword.html'));
  } catch (error) {
    await AuditTrail.create({
      event_type: 'RESETPASSWORD_AUF',
      event_time: new Date(),
      status: `${error.message}`
    });

    next(error);
  }
};

module.exports = { forgetPassword, resetPassword };