import { TextChannel, DMChannel, NewsChannel } from "discord.js";
import axios from 'axios';

async function dolarToday(channel: TextChannel | DMChannel | NewsChannel) {
  const dolarArray = await axios.get('https://economia.awesomeapi.com.br/json/daily/USD-BRL/15');
  const dolarToday = dolarArray.data[0].high;

  const pokemonNumber = `${(dolarToday * 100)}`.split('.');
  const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber[0]}`);
  const pokemon = pokemonData.data.name;

  channel.send(`Dólar hoje: ${dolarToday}, Pokemon: ${pokemon}`);
}

export default dolarToday;
