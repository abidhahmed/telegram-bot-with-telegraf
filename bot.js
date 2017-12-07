'use strict'

const Telegraf = require('telegraf')
const config = require('./config/config')
const comic = require('./lib/comic')

const bot = new Telegraf(config.telegramToken)

const errMsg = 'Unable to fullfil this request, try again later.'

bot.command('cyanide', (ctx) => {
  comic.cyanide()
    .then(cyanideLink => {
      ctx.replyWithPhoto({
        url: cyanideLink
      })
    })
    .catch(err => {
      ctx.reply(errMsg)
      console.error(err)
    })
})

bot.command('xkcd', (ctx) => {
  comic.xkcd()
    .then(xkcdLink => {
      ctx.replyWithPhoto({
        url: xkcdLink
      })
    })
    .catch(err => {
      ctx.reply(errMsg)
      console.error(err)
    })
})

bot.command('dinocomics', (ctx) => {
  comic.dinocomics()
    .then(dinocomicsLink => {
      ctx.replyWithPhoto({
        url: dinocomicsLink
      })
    })
    .catch(err => {
      ctx.reply(errMsg)
      console.error(err)
    })
})

bot.startPolling()
