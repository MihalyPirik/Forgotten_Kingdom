// Egyenlőre csak localhost


const express = require('express')
const app = express()
const router = require('./router')
const { errorHandler } = require('./Controllers/errorController')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())




app.use('/api', router)



app.use(errorHandler)

app.listen(3000)