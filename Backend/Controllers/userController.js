require('dotenv').config()
const jwt = require('jsonwebtoken')
const Player = require('../models/player')
const uuid = require('uuid')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const bcrypt = require('bcrypt')


const postRegistration = async (req, res, next) => {

    try {
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name
        await Player.create({ player_id: uuid.v1(), email: email, password: password, player_name: name })

        res.status(201).json({ "message": "Sikeres regisztráció!" })
    } catch (error) {
        if (error instanceof ValidationError) {
            res.status(400).json({ "message": error.errors[0].message })
        }
        else if (error instanceof UniqueConstraintError) {
            res.status(400).json({ "message": error.message })
        }
        else {
            next(error)
        }
    }
}

const postLogin = async (req, res, next) => {
    const { email, password } = req.body
    if (email == undefined) {
        return res.status(401).json({ "message": "Kérjük adja meg az email címét." })
    }
    if (password == undefined) {
        return res.status(401).json({ "message": "Kérjük adja meg a jelszavát." })
    }
    try {
        const user = await Player.findOne({ where: { email: email } })
        if (user) {
            if (await user.comparePassword(password)) {
                const token = jwt.sign({ id: user.player_id }, process.env.SECRET_KEY, { expiresIn: "1h" })
                res.setHeader("Authorization", `Bearer ${token}`)
                res.status(200).json({ "message": "Sikeres bejelentkezés!" })
            }
            else {
                res.status(401).json({ "message": "Hibás jelszó!" })
            }
        }
        else {
            res.status(401).json({ "message": "Hibás email cím!" })
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const putUser = async (req, res, next) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt(10))

      await Player.update(
        {
          email: email,
          password: hashPassword
        },
        {
          where: {
            player_id: req.params.player_id,
          }
        }
      );
  
      res.status(201).json({ message: "Sikeres módosítás!" });
    } catch (error) {
      console.log(error);
    }
  };

module.exports = { postRegistration, postLogin, putUser }