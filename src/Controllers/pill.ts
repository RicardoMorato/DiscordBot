import { User, TextChannel, DMChannel, NewsChannel } from "discord.js";

function pill(
  author: User,
  channel: TextChannel | DMChannel | NewsChannel,
  args: Array<string>
) {}

export default pill;
