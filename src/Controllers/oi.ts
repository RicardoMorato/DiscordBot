import { User, TextChannel, DMChannel, NewsChannel } from "discord.js";

function oi(
  author: User,
  channel: TextChannel | DMChannel | NewsChannel
) {
  console.log('hi lorena');
  if (author.id === "230047229203841025") {
    channel.send(`Oi ${author.username}, você é lindo`);
  } else {
    channel.send(`Oi ${author.username}, você é feio`);
  }
}

module.exports = {oi};
