'use strict'

const axios = require('axios')
const cheerio = require('cheerio')
axios.defaults.adapter = require('axios/lib/adapters/http')

module.exports = {
  cyanide: async (url) => {
    const web = await axios.get(url)
    const c = cheerio.load(web.data)
    const r = `${c('#main-comic').attr('src')}`
    if (r === 'undefined') {
      throw new Error('lol')
    } else {
      return `http:${r}`
    }
  },
  xkcd: async (url) => {
    const web = await axios.get(url)
    const c = cheerio.load(web.data)
    const r = `${c('#comic img').attr('src')}`
    if (r === 'undefined') {
      throw new Error('xkcd undefined')
    } else {
      return `http:${r}`
    }
  },
  dinocomics: async (url) => {
    const web = await axios.get(url)
    const c = cheerio.load(web.data)
    const r = `${c('.randomquote a').eq(1).attr('href').split('=')[1]}`
    if (r === 'undefined') {
      throw new Error('dinocomics undefined')
    } else {
      return `http://www.qwantz.com/comics/comic2-${r}.png`
    }
  }
}
