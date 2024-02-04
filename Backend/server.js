require('dotenv').config()
const cookie=require('cookie-parser')
const express = require('express')
const app = express()
require('./services/dbService')
require('./models/relations')
const { errorHandler } = require('./Controllers/errorController')
const userRouter = require('./routes/userRoutes')
const playerRouter = require('./routes/gameRoutes/playerRoutes')



app.use(cookie())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type')
    res.setHeader('Access-Control-Expose-Headers','Authorization')
    next()
})




app.use('/user',userRouter)
app.use('/player/:playerId',playerRouter)

app.use(errorHandler)

app.listen(process.env.PORT,()=>{console.log('Server started at port '+process.env.PORT)})