// A mobile based app to provide stats about comic book characters like strengths, weaknesses, secret identities, associations, etc. 
//in an easy to use and intuitive format.
const API_KEY = "";
const searchInput = document.getElementById("search-input").value.toLowerCase()
const searchButton = document.getElementById("search-button")
const displayName = document.getElementById("display-name")
const displayImage = document.getElementById("display-image")
const displaySummary = document.getElementById("display-summary")
const src = document.createElement("src")

const getCharacter = async () => {
    const characterName = "batman"
    // url1 = `https://www.comicvine.com/api/characters/?api_key=${API_KEY}&filter=name:${characterName}&field_list=api_detail_url&format=json`;
    url1 = `https://www.comicvine.com/api/characters/?api_key=${API_KEY}&filter=name:${characterName}&format=json`;
    const characterFind = await fetch(url1)
    const json = await characterFind.json()
    console.log(json)
}
// getCharacter()

// const getCharacterDetails = async () => {
//     // url2 = `${json.results[0].api_detail_url}?api_key=${API_KEY}`;
//     const url2 = `https://www.comicvine.com/api/character/4005-1699/?api_key=${API_KEY}&format=json`
//     const characterDetails = await fetch(url2)
//     const json = await characterDetails.json()
//     displayName.innerText = json.results.name
//     displayImage.src = json.results.image.medium_url
//     displaySummary.innerText = json.results.deck
//     console.log(json)
// }

// searchButton.onclick = () => getCharacter()
// getCharacterDetails()