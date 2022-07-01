const dropdown = document.getElementById("pokemon-select");
const pokemonInfo = document.createElement("p");
const pokemonCard = document.createElement("img")
const pokemonContainer = document.getElementById("pokemon-card");
const pokemonChoice = (pokemon)=> {
  pokemonContainer.innerHTML = null;
  if (pokemon === "eevee") {
    // pokemonInfo.innerText = "Eevee";
    pokemonCard.src = "https://bit.ly/3OUNWgt";
  }
  if (pokemon === "vaporeon") {
    // pokemonInfo.innerText = "Vaporeon";
    pokemonCard.src = "https://bit.ly/3OpO6fT"
  }
  if (pokemon === "jolteon") {
    // pokemonInfo.innerText = "Jolteon";
    pokemonCard.src = "https://bit.ly/3OMTDwT"
  }
  if (pokemon === "espeon") {
    // pokemonInfo.innerText = "Espeon";
    pokemonCard.src = "https://bit.ly/3nncDq9"
  }
  if (pokemon === "umbreon") {
    // pokemonInfo.innerText = "Umbreon";
    pokemonCard.src = "https://bit.ly/3y4bybB";
  }
  // pokemonContainer.appendChild(pokemonInfo);
  pokemonContainer.appendChild(pokemonCard)
};
dropdown.onchange = (event) => pokemonChoice(event.target.value);
