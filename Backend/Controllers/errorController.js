const errorHandler = (err, req, res, next) => {
    res.status(500).json({ "message": "Valami hiba történt, próbáld meg késöbb!" })
}

module.exports = { errorHandler }