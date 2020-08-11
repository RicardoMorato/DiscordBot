import { User, TextChannel, DMChannel, NewsChannel } from "discord.js";

const listOfCommands = [
  {
    name: "**ping**",
    help:
      "Que tal jogar uma partida amigável de ping-pong com o bot? :ping_pong:",
  },
  {
    name: "**ei_bot**",
    help:
      "Faça uma pergunta de sim ou não para o bot e ele lhe responderá :man_mage:",
  },
  {
    name: "**dilma**",
    help: "Mostra uma frase engraçada da nossa ex-presidente Dilma",
  },
  {
    name: "**oi**",
    help: 'Responde ao seu "oi" e lhe conta uma verdade :speak_no_evil:',
  },
  {
    name: "**dolar**",
    help:
      "Responde com o valor do dólar do dia (ou pelo menos o que a gente consegue pela api hehehe) :money_with_wings:",
  },
];

const allGreetings = ["Olá, ", "Opa, ", "E aí, ", "Oi, "];

function help(author: User, channel: TextChannel | DMChannel | NewsChannel) {
  const greeting =
    allGreetings[Math.floor(Math.random() * allGreetings.length)];
  let output = `${greeting} ${author.username}! Aqui estão os nossos comandos :pig:`;
  listOfCommands.map((command) => {
    const sentence = `Comando: ${command.name}\nO que faz: ${command.help}`;
    output += `\n\n${sentence}`;
    return output;
  });

  channel.send(output);
}

export default help;
