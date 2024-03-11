const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})
const outputFile = './swagger_output.json'
const endpointsFiles = ["./server.js"]

const options={
    info:{
        title:"Forgotten Kingdom",
        description:"A dokumentációt a <b>swagger-autogen</b> generálta"
    },
      servers: [
        {
          url: "https://forgottenkingdom.cyclic.app/"
        }
      ],
      components: {
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles,options)
    .then(() => {
        require('./server.js')
    })
