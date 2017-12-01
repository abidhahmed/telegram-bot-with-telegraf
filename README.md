## telegram-bot-with-telegraf
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

![Preview](./preview.png?raw=true "Preview Screenshot")

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

### Features
* Random comics from **Cyanide&Happiness**.
* Random comics from **XKCD**.
* Random comics from **Dinocomics**.
* More coming soon!

##### Misc

Remember to checkout **Telegraf** documentation.
http://telegraf.js.org/

License
----

MIT
