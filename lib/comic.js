'use strict'

const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
  cyanide: async () => {
    const web = await axios.get('http://explosm.net/comics/random')
    const c = cheerio.load(web.data)
    const r = `${c('#main-comic').attr('src')}`
    if (r === 'undefined') {
      throw new Error('cyanide undefined')
    } else {
      return `http:${r}`
    }
  },
  xkcd: async () => {
    const web = await axios.get('http://c.xkcd.com/random/comic/')
    const c = cheerio.load(web.data)
    const r = `${c('#comic img').attr('src')}`
    if (r === 'undefined') {
      throw new Error('xkcd undefined')
    } else {
      return `http:${r}`
    }
  },
  dinocomics: async () => {
    const web = await axios.get('http://www.qwantz.com/index.php')
    const c = cheerio.load(web.data)
    const r = `${c('.randomquote a').eq(1).attr('href').split('=')[1]}`
    if (r === 'undefined') {
      throw new Error('dinocomics undefined')
    } else {
      return `http://www.qwantz.com/comics/comic2-${r}.png`
    }
  }
}
