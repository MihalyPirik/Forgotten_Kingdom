require('dotenv').config()
const cookie=require('cookie-parser')
const express = require('express')
const cors=require('cors')
const app = express()

const { errorHandler } = require('./Controllers/errorController')
const userRouter = require('./routes/userRoutes')
const gameRouter = require('./routes/gameRoutes')



app.use(cookie())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({origin:'http://localhost:5173'}))




app.use('/user',userRouter)
app.use('/game',gameRouter)

app.use(errorHandler)

app.listen(process.env.PORT,()=>{console.log('Server started at port '+process.env.PORT)})