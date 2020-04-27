const frases = [
  'Com certeza!',
  'Com certeza não!',
  'Definitivamente sim',
  'Definitivamente não',
  'Se você tiver sorte, sim',
  'Se você tiver sorte, não',
  'Tomara que sim',
  'Tomara que não',
  'Sou suspeito para falar',
  'Provavelmente sim',
  'Provavelmente não',
  'Tudo aponta que sim',
  'Tudo aponta que não',
  'As suas chances são muito boas',
  'As suas chances não são tão boas',
  'Pelo que eu vejo, sim',
  'Pelo que eu vejo, não',
  'Certamente!',
  'Certamente não!',
  'Está decidido que sim',
  'Está decidido que não',
  'Melhor não te falar agora...',
];

function eiBot(channel, args, username) {
  if (args.length <= 1) {
    channel.send(`Você é fraco ${username}, lhe faltam perguntas na frase.`);
  } else {
    const randomNumber = Math.floor(Math.random() * frases.length);
    channel.send(frases[randomNumber]);
  }
}

module.exports = { eiBot };
