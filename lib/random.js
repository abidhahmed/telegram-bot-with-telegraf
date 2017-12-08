'use strict'

const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
  cat: async () => {
    const web = await axios.get('http://thecatapi.com/api/images/get?format=src')
    return web.request._redirectable._currentUrl
  },
  joke: async () => {
  	const web = await axios.get('http://theoatmeal.com/djtaf/')
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
