'use strict'

const axios = require('axios')
const cheerio = require('cheerio')
axios.defaults.adapter = require('axios/lib/adapters/http')

module.exports = {
  cat: async (url) => {
    const web = await axios.get(url)
    return web.request._redirectable._currentUrl
  },
  joke: async (url) => {
    const web = await axios.get(url)
    const c = cheerio.load(web.data)
    const r1 = `${c('#joke_0 .part1').text()}`
    const r2 = `${c('#joke_0 #part2_0').text()}`
    if (!r1 || !r2) {
      throw new Error('joke undefined')
    } else {
      return [r1, r2]
    }
  }
}
