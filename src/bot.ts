import Discord from "discord.js";

require("dotenv/config");
import help from "./Controllers/help";
import oi from "./Controllers/oi";
import heyBot from "./Controllers/heyBot";
import dilminha from "./Controllers/dilminha";
import dolarToday from "./Controllers/dolarToday";

const { TOKEN } = process.env;
const prefix = "/";
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", ({ author, content, channel }) => {
  // Checking if the message starts with '/' or if the author isn't a bot
  if (!content.startsWith(prefix) || author.bot) return;

  const args = content.slice(prefix.length).split(" ");
  const command = args.shift()?.toLowerCase();

  if (content.substring(0, 1) === prefix) {
    switch (command) {
      case "ping":
        channel.send("PONG!");
        break;
      case "oi":
        oi(author, channel);
        break;
      case "help":
        help(author, channel);
        break;
      case "ei_bot":
        heyBot(author, channel, args);
        break;
      case "dilma":
        dilminha(channel);
        break;
      case "dolar":
        dolarToday(channel);
        break;
      case "pill":
        console.log('pill');
      break
      default:
        channel.send(
          "Que comando legal, quero aprender! (https://github.com/RicardoMorato/discord-bot)"
        );
        break;
    }
  }
});

client.login(TOKEN);
