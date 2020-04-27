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
  const eiBotArgs = message.content.slice('/ei_bot'.length).split(' ');

  if (content.substring(0, 1) === prefix) {
    switch (content) {
      case `${prefix}ping`:
        channel.send('PONG!');
        break;
      case `${prefix}vtnc`:
        vtnc(author.username, channel);
        break;
      case `${prefix}oi`:
        oi(author, channel);
        break;
      case `${prefix}dilma`:
        dilma(channel);
        break;
      case `${prefix}help`:
        listCommands(author.username, channel);
        break;
      case `${prefix}ei_bot`:
        eiBot(channel, eiBotArgs, author.username);
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
