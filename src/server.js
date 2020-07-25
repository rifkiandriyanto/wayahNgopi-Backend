const { port } = require('./configs')
const { IP } = require('./configs')
const express = require('express')
const server = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./routes')
const cors = require('cors')
const compress = require('compression')
const helmet = require('helmet')

server.use(helmet());
server.use(compress());
server.use(cors());
server.listen(port, () => console.log(`\n This server is running on port ${port}, and use IP ${IP}`))
server.use(logger('dev'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('/', mainNavigation)
