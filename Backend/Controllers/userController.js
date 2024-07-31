require('dotenv').config();
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const path = require('path');

const Player = require('../models/player');
const AuditTrail = require('../models/auditTrail');

const postRegistration = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const token = crypto.randomBytes(32).toString('hex');
    const playerId = uuid.v1();
    await Player.create({
      player_id: playerId,
      email: email,
      password: password,
      player_name: name,
      email_verification_token: token,
      email_verified: false,
    });

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
      subject: 'Email hitelesítés',
      text: `Kérjük, hitelesítse az email címét a következő linkre kattintva: http://127.0.0.1:3000/user/verify-email?token=${token}&id=${playerId}`
    };

    await transporter.sendMail(mailOptions);

    await AuditTrail.create({
      player_id: playerId,
      event_type: 'REGISTRATION',
      event_time: new Date(),
      status: 'SUCCESS',
    });

    res.status(201).json({ data: { message: 'Sikeres regisztráció! Ellenőrizze az email címét a hitelesítéshez.' } });
  } catch (error) {
    await AuditTrail.create({
      player_id: null,
      event_type: 'REGISTRATION',
      event_time: new Date(),
      status: `${error.errors[0].message}`,
    });

    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.errors[0].message });
    } else if (error instanceof UniqueConstraintError) {
      res.status(400).json({ message: error.message });
    } else {
      await AuditTrail.create({
        player_id: null,
        event_type: 'REGISTRATION',
        event_time: new Date(),
        status: `${error.message}`
      });

      next(error);
    }
  }
};

const postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (email == undefined) {
    return res.status(401).json({ message: 'Kérjük adja meg az email címét.' });
  }
  if (password == undefined) {
    return res.status(401).json({ message: 'Kérjük adja meg a jelszavát.' });
  }
  try {
    const user = await Player.findOne({ where: { email: email } });
    if (user) {
      if (user.email_verified) {
        if (await user.comparePassword(password)) {
          const token = jwt.sign({ id: user.player_id }, process.env.SECRET_KEY, {
            expiresIn: '1h',
          });
          res.setHeader('Authorization', `Bearer ${token}`);
          res.status(200).json({ data: { message: 'Sikeres bejelentkezés!' } });

          await AuditTrail.create({
            player_id: user.player_id,
            event_type: 'LOGIN',
            event_time: new Date(),
            status: 'SUCCESS'
          });
        } else {
          res.status(401).json({ message: 'Hibás jelszó!' });

          await AuditTrail.create({
            player_id: null,
            event_type: 'LOGIN',
            event_time: new Date(),
            status: 'Hibás jelszó!'
          });
        }
      } else {
        res.status(401).json({ message: 'Az email cím nincs hitelesítve!' });

        await AuditTrail.create({
          player_id: user.player_id,
          event_type: 'LOGIN',
          event_time: new Date(),
          status: 'Az email cím nincs hitelesítve!'
        });
      }
    } else {
      res.status(401).json({ message: 'Ilyen email címmel nincs regisztrálva felhasználó!' });

      await AuditTrail.create({
        player_id: null,
        event_type: 'LOGIN',
        event_time: new Date(),
        status: 'Ilyen email címmel nincs regisztrálva felhasználó!'
      });
    }
  } catch (error) {
    await AuditTrail.create({
      player_id: null,
      event_type: 'LOGIN',
      event_time: new Date(),
      status: `${error.message}`
    });

    next(error);
  }
};

const verifyEmail = async (req, res, next) => {
  try {
    const { token, id } = req.query;

    const player = await Player.findOne({ where: { player_id: id, email_verification_token: token } });

    if (!player) {
      await AuditTrail.create({
        player_id: id,
        event_type: 'REGISTRATION_AUF',
        event_time: new Date(),
        status: 'Érvénytelen hitelesítő link!'
      });

      return res.sendFile(path.join(__dirname, '..', '..', 'Frontend/WebPage/public/answerPages/invalidLink.html'));
    }

    player.email_verified = true;
    player.email_verification_token = null;
    await player.save();

    await AuditTrail.create({
      player_id: player.player_id,
      event_type: 'REGISTRATION_AUF',
      event_time: new Date(),
      status: 'SUCCESS'
    });

    res.sendFile(path.join(__dirname, '..', '..', 'Frontend/WebPage/public/answerPages/emailVerified.html'));
  } catch (error) {
    await AuditTrail.create({
      player_id: null,
      event_type: 'REGISTRATION_AUF',
      event_time: new Date(),
      status: `${error.message}`
    });

    next(error);
  }
};

const putUser = async (req, res, next) => {
  try {
    const player_id = req.token.id;

    const player_name = req.body.player_name;
    const email = req.body.email;
    const password = req.body.password;
    let hashPassword;
    console.log(password);
    if (password) {
      hashPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));
    }

    await Player.update(
      {
        player_name: player_name,
        email: email,
        password: hashPassword,
      },
      {
        where: {
          player_id: player_id,
        },
      }
    );

    res.status(200).json({ data: { message: 'Sikeres módosítás!' } });
  } catch (error) {
    next(error);
  }
};

module.exports = { postRegistration, verifyEmail, postLogin, putUser };