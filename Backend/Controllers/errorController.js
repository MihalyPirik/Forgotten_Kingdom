const errorHandler=(err,req,res,next)=>
{
    console.log(err);
    if(err.errno==1062)
        {
            return res.status(400).json({"message":"Ez az email cím már foglalt!"})
        }
        if (err.errors!=undefined) {

            return res.status(400).json({ "message": err.errors[0].msg })
        }
        res.status(500).json({ "message": "Valami hiba történt, próbáld meg késöbb!" })
}

module.exports={errorHandler}