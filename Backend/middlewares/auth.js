require('dotenv').config()
const jwt=require('jsonwebtoken')

const userAuth=async(req,res,next)=>
{
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if(!token)
        {
            res.status(401).json({"message":"Jelentkezz be!"})
        }
        jwt.verify(token,process.env.SECRET_KEY,{},(err)=>
        {
            if(err)
            {
                res.status(403).json({"message":"Nincs jogod a következőre!"})
            }
            else
            {
                next()
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports={userAuth}

