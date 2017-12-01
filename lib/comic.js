'use strict'

const fetch = require('node-fetch')
const cheerio = require('cheerio')

module.exports = {
  cyanide: function () {
    return new Promise((resolve, reject) => {
      fetch('http://explosm.net/comics/random')
        .then(res => res.text())
        .then((body) => {
          let c = cheerio.load(body)
          resolve(`http:${c('#main-comic').attr('src')}`)
        })
        .then(err => reject(err))
    })
  },
  xkcd: function () {
    return new Promise((resolve, reject) => {
      fetch('http://c.xkcd.com/random/comic/')
        .then(res => res.text())
        .then((body) => {
          let c = cheerio.load(body)
          resolve(`http:${c('#comic img').attr('src')}`)
        })
        .then(err => reject(err))
    })
  },
  dinocomics: function () {
    return new Promise((resolve, reject) => {
      fetch('http://www.qwantz.com/index.php')
        .then(res => res.text())
        .then((body) => {
          let c = cheerio.load(body)
          let d = `${c('.randomquote a').eq(1).attr('href').split('=')[1]}`
          resolve(`http://www.qwantz.com/comics/comic2-${d}.png`)
        })
        .then(err => reject(err))
    })
  }
}
