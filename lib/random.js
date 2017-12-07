'use strict'

const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
  cats: async () => {
    const web = await axios.get('http://thecatapi.com/api/images/get?format=src&type=png')
    return web.request._redirectable._currentUrl
  }
}
