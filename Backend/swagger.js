const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})
const outputFile = './swagger_output.json'
const endpointsFiles = ["./server.js"]

const options={
    info:{
        title:"Forgotten Kingdom",
        description:"A dokumentációt a <b>swagger-autogen</b> generálta"
    },
    securityDefinitions: {
        jwt: {
          type: 'http',
          in: 'header',
          scheme:"bearer",
          name: 'Authorization',
          description: 'A felhasználó hitelesístésre használt tokenje'
        }
      }
}

swaggerAutogen(outputFile, endpointsFiles,options)
    .then(() => {
        require('./server.js')
    })
