
const { validationResult } = require("express-validator")
const Query = require("./dbConnection")


const registration = (req, res) => {

    try {
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name
        const validation=validationResult(req)
        validation.throw()
        Query("INSERT INTO players (HP,player_name,email,password,world_name) VALUES ('100',?,?,?,'valami')", [name, email, password])
        res.status(201).json({ "message": "Sikeres regisztráció!" })
    } catch (error) {
        res.status(400).json({"message":error.errors[0].msg})
    }


}

module.exports = { registration }