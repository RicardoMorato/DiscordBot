import { User, TextChannel, DMChannel, NewsChannel } from "discord.js";

const sentences = [
  "Com certeza!",
  "Com certeza não!",
  "Definitivamente sim",
  "Definitivamente não",
  "Se você tiver sorte, sim",
  "Se você tiver sorte, não",
  "Tomara que sim",
  "Tomara que não",
  "Sou suspeito para falar",
  "Provavelmente sim",
  "Provavelmente não",
  "Tudo aponta que sim",
  "Tudo aponta que não",
  "As suas chances são muito boas",
  "As suas chances não são tão boas",
  "Pelo que eu vejo, sim",
  "Pelo que eu vejo, não",
  "Certamente!",
  "Certamente não!",
  "Está decidido que sim",
  "Está decidido que não",
  "Melhor não te falar agora...",
];

function heyBot(
  author: User,
  channel: TextChannel | DMChannel | NewsChannel,
  args: Array<string>
) {
  if (args.length <= 1) {
    channel.send(
      `Você é fraco ${author.username}, lhe faltam perguntas na frase.`
    );
  } else {
    const randomNumber = Math.floor(Math.random() * sentences.length);
    channel.send(sentences[randomNumber]);
  }
}

export default heyBot;
