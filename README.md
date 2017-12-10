## telegram-bot-with-telegraf
[![Build Status](https://travis-ci.org/abidhahmed/telegram-bot-with-telegraf.svg?branch=master)](https://travis-ci.org/abidhahmed/telegram-bot-with-telegraf) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A Telegram Bot written with Telegraf's awesome API for sharing digital comics/misc content with your friends/groups.

### Installation

You need [Node.js](https://nodejs.org/) (> 8) - install the dependencies via

```sh
$ npm install
```

### Configuration

1. Make sure you have a token from Telegram. To obtain one, talk to [@BotFather](https://t.me/BotFather) on Telegram.
2. Save your token inside `config/config.js` ~ `telegramToken`.
3. Start the bot via `npm start`.
4. To modify commands, look under `bot.js`. 
5. Logic for fetching comic is separated under `lib/comic.js`.
6. Logic for fetching other random things is separated under `lib/random.js`

### Features
* Random comics from **Cyanide&Happiness**.
* Random comics from **XKCD**.
* Random comics from **Dinocomics**.
* Random cats from **The Cat API**.
* Random two-line jokes from **The Oatmeal**.
* More coming soon!

##### Screenshot
![Preview](./preview.png?raw=true "Preview Screenshot")

##### Misc
Remember to checkout **Telegraf** documentation.
http://telegraf.js.org/

License
----

MIT
