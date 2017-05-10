import express from 'express'
import twitterAPI from 'twitter'
import config from './config.js'
const router = express.Router()
const twitter = new twitterAPI(config)

const url = 'statuses/user_timeline'
const params = 
{ 
  'q' : {
    screen_name: 'webdevmparks',
    recent: 'mixed'
    }
}

router.get('/', (request, response) => {
  twitter.get(
    url, 
    params, 
    (error, tweets, twitterResponse) => {
      response.json(tweets)
    }
  )
})

router.get('/test', (request, response) => {
  twitter.get( url, params, (error, tweets, twitterResponse) => {
    response.json(tweets)
  } )
})

export default router