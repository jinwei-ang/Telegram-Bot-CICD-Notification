const { Telegraf } = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome to the new NUSFintech!'))
bot.hears('hi', (ctx) => ctx.reply('Hi!!!'))
bot.hears('hieveryone', (ctx) =>ctx.telegram.sendMessage('-1001245802199', 'Hello World!'))
bot.startPolling()
console.log('Telegram bot started.')