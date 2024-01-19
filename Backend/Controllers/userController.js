
const { validationResult } = require("express-validator")
const { postUser, getUserByEmail } = require("./dbService")



const registration = async (req, res, next) => {

    try {

        // const data=await getUserByEmail(req.body.email)
        // console.log(data);
        validationResult(req).throw()
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name

        await postUser(name, email, password)

        res.status(201).json({ "message": "Sikeres regisztráció!" })

    } catch (error) {
        next(error)
    }


}

const login=async(req,res)=>
{

}

module.exports = { registration }