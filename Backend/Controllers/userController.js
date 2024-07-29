require('dotenv').config();
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Player = require('../models/player');

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

    res.status(201).json({ data: { message: 'Sikeres regisztráció! Ellenőrizze az email címét a hitelesítéshez.' } });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.errors[0].message });
    } else if (error instanceof UniqueConstraintError) {
      res.status(400).json({ message: error.message });
    } else {
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
      if (user.email_verified == true) {
        if (await user.comparePassword(password)) {
          const token = jwt.sign({ id: user.player_id }, process.env.SECRET_KEY, {
            expiresIn: '1h',
          });
          res.setHeader('Authorization', `Bearer ${token}`);
          res.status(200).json({ data: { message: 'Sikeres bejelentkezés!' } });
        } else {
          res.status(401).json({ message: 'Hibás jelszó!' });
        }
      } else {
        res.status(401).json({ message: 'Email cím nincs hitelesítve!' });
      }
    } else {
      res.status(401).json({ message: 'Hibás email cím!' });
    }
  } catch (error) {
    next(error);
  }
};

const verifyEmail = async (req, res, next) => {
  try {
    const { token, id } = req.query;

    const player = await Player.findOne({ where: { player_id: id, email_verification_token: token } });

    if (!player) {
      return res.status(400).json({ message: 'Érvénytelen hitelesítő link.' });
    }

    player.email_verified = true;
    player.email_verification_token = null;
    await player.save();

    res.status(200).json('Email sikeresen hitelesítve!').toString();
  } catch (error) {
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