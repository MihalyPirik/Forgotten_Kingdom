// Egyenlőre csak localhost


const express = require('express')
const app = express()
const router = require('./router')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('dist'))




app.use('/api', router)





app.listen(3000)

// c.connect(function (error) {
//   if (error) {
//     console.log(error)
//   }
//   else {
//     c.query("", function (error, result) {
//       if (error) {
//         console.log(error.message)
//       }
//       else { console.log(result[0]) }
//       c.end()
//     }
//     )
//   }
// })
