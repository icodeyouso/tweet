import express from 'express'
import twitterAPI from 'twitter'
import config from './config.js'
const router = express.Router()
const twitter = new twitterAPI(config)

const params = {
  screen_name: 'yourScreenName',
  recent: 'mixed'
}

router.get('/', (request, response) => {
  let params = {screen_name: 'webdevquisparks'}
  twitter.get('search/tweets', params, (error, tweets,
    twitterResponse) => {
    response.json(tweets)
  })
})

export default router