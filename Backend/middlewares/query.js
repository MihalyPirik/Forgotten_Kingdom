const { Op } = require("sequelize")

const ProcessQuery = (req, res, next)=> {
  req.query = JSON.stringify(req.query)
  req.query = req.query.replace(/:"([^"]+)"/g, ':$1')
  // req.query = req.query.replace(/"(gte|lte|lt|gt|ne)"/g, '[Op.$1]')
  
req.query = req.query.replaceAll("'",'"')

req.query = JSON.parse(req.query)

for (const key in req.query) {
  if(typeof req.query[key]=='object')
  {
    const nestedKey = Object.keys(req.query[key])[0]
    req.query[key]={[Op[nestedKey]]:req.query[key][nestedKey]}
  }
}

next()
}
module.exports = {ProcessQuery}