// A website that will allow the user to find media and streaming information related to a specific comic book character.
const cv_key = config.CV_API_KEY;
const charactersURL = "https://www.comicvine.com/api/characters/";
const searchButton = document.getElementById("search-button");
const charCard = document.querySelector(".character-card");
let char = [];

const getCharacter = async () => {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  if (searchInput) {
    let url = `${charactersURL}?api_key=${cv_key}&filter=name:${searchInput}&format=json`;
    const charList = await fetch(url);
    const json = await charList.json();
    char = await json.results[0];
    displayChar(char);
    console.log(char);
  }
};

const displayChar = (char) => {
  charCard.innerHTML = "";
  if (char) {
    charCard.innerHTML =
      `<div class="character-card-inner"><div id= "front-card"><h2>${char.name}</h2>` +
      `<img src=${char.image.original_url} alt=${char.name}></div>` +
      // `<div id="back-card"><p>${char.deck}</p></div></div>`;
      "</div>"
  } else {
    charCard.innerText = "No results found";
  }
};

searchButton.onclick = () => getCharacter();
