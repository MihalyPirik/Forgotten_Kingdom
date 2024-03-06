const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'
const endpointsFiles = ["./server.js"]

const options={
    info:{
        title:"Forgotten Kingdom"
    }
}

swaggerAutogen(outputFile, endpointsFiles,options)
    .then(() => {
        require('./server.js')
    })
