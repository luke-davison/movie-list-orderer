const express = require('express')

const server = express()

const PORT = process.env.PORT || 3001

server.use(express.static('public'))

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
