/* eslint-disable no-console */
require('dotenv/config');

// 3rd party
const Discord = require('discord.js');

// Services
const {
  dilma,
  eiBot,
  listCommands,
  oi,
  vtnc,
} = require('./Controllers');

// Config
const { TOKEN } = process.env;
const prefix = '/';
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {
  const { author, content, channel } = message;
  if (!content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (content.substring(0, 1) === prefix) {
    switch (command) {
      case 'ping':
        channel.send('PONG!');
        break;
      case 'vtnc':
        vtnc(author.username, channel);
        break;
      case 'oi':
        oi(author, channel);
        break;
      case 'dilma':
        dilma(channel);
        break;
      case 'help':
        listCommands(author.username, channel);
        break;
      case 'ei_bot':
        eiBot(channel, args, author.username);
        break;
      default:
        channel.send(
          'Que comando legal, quero aprender! (https://github.com/RicardoMorato/discord-bot)',
        );
        break;
    }
  }
});

client.login(
  TOKEN,
);
