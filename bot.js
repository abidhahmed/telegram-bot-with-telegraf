'use strict'

const Telegraf = require('telegraf')
const config = require('./config/config')
const comic = require('./lib/comic')
const random = require('./lib/random')

const bot = new Telegraf(config.telegramToken)

const errMsg = 'Unable to fullfil this request, try again later.'

bot.command('cyanide', (ctx) => {
  comic.cyanide(config.explosmUrl)
    .then(cyanideLink => {
      ctx.replyWithChatAction('upload_photo')
      ctx.replyWithPhoto(cyanideLink, {caption: 'Random C&H comic'})
    })
    .catch(err => {
      ctx.reply(errMsg)
      console.error(err)
    })
})

bot.command('xkcd', (ctx) => {
  comic.xkcd(config.xkcdUrl)
    .then(xkcdLink => {
      ctx.replyWithChatAction('upload_photo')
      ctx.replyWithPhoto(xkcdLink, {caption: 'Random XKCD comic'})
    })
    .catch(err => {
      ctx.reply(errMsg)
      console.error(err)
    })
})

bot.command('dinocomics', (ctx) => {
  comic.dinocomics(config.dinocomicsUrl)
    .then(dinocomicsLink => {
      ctx.replyWithChatAction('upload_photo')
      ctx.replyWithPhoto(dinocomicsLink, {caption: 'Random Dinocomics comic'})
    })
    .catch(err => {
      ctx.reply(errMsg)
      console.error(err)
    })
})

bot.command('randomcat', (ctx) => {
  random.cat(config.catApi)
    .then(catsLink => {
      ctx.replyWithChatAction('upload_photo')
      ctx.replyWithPhoto(catsLink, {caption: 'Random Cat'})
    })
    .catch(err => {
      ctx.reply(errMsg)
      console.log(err)
    })
})

bot.command('randomjoke', (ctx) => {
  random.joke(config.jokeUrl)
    .then(jokeTxt => {
      ctx.replyWithChatAction('typing')
      ctx.reply(jokeTxt[0])
      setTimeout(() => ctx.reply(jokeTxt[1]), 1000)
    })
    .catch(err => {
      ctx.reply(errMsg)
      console.log(err)
    })
})

bot.startPolling()
