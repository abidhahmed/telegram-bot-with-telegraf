'use strict'

const Telegraf = require('telegraf')
const url = require('is-url')
const config = require('./config/config')
const comic = require('./lib/comic')

const bot = new Telegraf(config.telegramToken)

const errMsg = 'Unable to fullfil this request, try again later.'
const errConsole = 'Wrong link'

bot.command('cyanide', async (ctx) => {
  const c = await comic.cyanide()
  if (url(c)) {
  	ctx.replyWithPhoto({
  	  url: c
  	})
  } else {
  	console.error(errConsole)
  	ctx.reply(errMsg)
  }
})

bot.command('xkcd', async (ctx) => {
  const c = await comic.xkcd()
  if (url(c)) {
  	ctx.replyWithPhoto({
  	  url: c
  	})
  } else {
  	console.error(errConsole)
  	ctx.reply(errMsg)
  }
})

bot.command('dinocomics', async (ctx) => {
  const c = await comic.dinocomics()
  if (url(c)) {
  	ctx.replyWithPhoto({
  	  url: c
  	})
  } else {
  	console.error(errConsole)
  	ctx.reply(errMsg)
  }
})

bot.startPolling()
