require('dotenv').config()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const { validationResult } = require("express-validator")
const { postUser, getUser } = require("../services/dbService")



const registration = async (req, res, next) => {

    try {
        validationResult(req).throw()
        const email = req.body.email
        const password = req.body.password
        const name = req.body.name

        const hashPassword=await bcrypt.hash(password,await bcrypt.genSalt(10))
        await postUser(name, email, hashPassword)

        res.status(201).json({ "message": "Sikeres regisztráció!" })

    } catch (error) {
        next(error)
    }


}

const login=async(req,res,next)=>
{
try {
    validationResult(req).throw()
    const {email,password}=req.body
    const user=await getUser(email)
    if(user)
    {
        
        const match=await bcrypt.compare(password,user.password)
        if(match)
        {
            const token=jwt.sign({id:user.player_id},process.env.SECRET_KEY,{expiresIn:"1h"})
            res.cookie('Authorization', token, { httpOnly: true, secure: true })
            console.log(res.headers.cookie);
            res.status(200).json({"message":"Sikeres bejelentkezés!"})
        }
        else
        {
            res.status(401).json({"message":"Hibás jelszó!"})
        }
    }
    else
    {
        res.status(401).json({"message":"Hibás email cím!"})
    }
} catch (error) {
    next(error)
}
    
}

module.exports = { registration,login }