import Discord from "discord.js";

require("dotenv/config");

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

      default:
        break;
    }
  }
});

client.login(TOKEN);
