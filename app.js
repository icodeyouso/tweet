const routes = ('./server.js')
const ejs = 'ejs'
const path = ('path')
const logger = ('morgan')
const bodyParser = ('body-parser')
const express = require ('express')
const server = express()

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

server.use(logger('dev'))
server.use(express.static(path.join(__dirname + 'src/public')))
server.use(bodyParser.urlencoded({extended: true}))

server.use('/', routes)

server.listen(process.env.PORT || 8080)
module.exports = server

