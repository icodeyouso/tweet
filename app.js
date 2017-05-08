import routes from './routes'
import ejs from 'ejs'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
const server = express()

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')