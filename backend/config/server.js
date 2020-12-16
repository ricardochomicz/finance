const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({
    extended: true //interpreta mais tipos de informação a partir do submit do form
}))

server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})