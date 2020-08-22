import { TextChannel, DMChannel, NewsChannel } from "discord.js";
import axios from "axios";
import puppeteer from "puppeteer";

async function dolarToday(channel: TextChannel | DMChannel | NewsChannel) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.google.com/search?q=dolar");
  const dolarTodayText = await page.evaluate(() => {
    return document.getElementsByClassName("DFlfde SwHCTb")[0].innerHTML;
  });
  const dolarToday = Number(dolarTodayText.replace(",", "."));

  const pokemonNumber = `${dolarToday * 100}`.split(".");
  const pokemonData = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber[0]}`
  );
  const pokemon = pokemonData.data.name;

  channel.send(`Dólar hoje: ${dolarToday}, Pokemon: ${pokemon}`);
  channel.send({
    files:
      `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${dolarToday}.png`,
  });
}

export default dolarToday;
