const errorHandler=(err,req,res,next)=>
{
    console.log('error handler');
    if(err.errno==1062)
        {
            res.status(400).json({"message":"Ez az email cím már foglalt!"})
        }
        else if (err.errors!=undefined) {

            res.status(400).json({ "message": err.errors[0].msg })
        }
        else
        {
            res.status(500).json({ "message": "Valami hiba történt, próbáld meg késöbb!" })
        }
}

module.exports={errorHandler}