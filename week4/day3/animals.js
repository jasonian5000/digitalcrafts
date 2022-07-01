//select the elements that you need to either attach things to or check

const dropdown = document.getElementById("animal-farm");
const animalNoise = document.createElement("p")
const animalNoiseContainer = document.getElementById("animal-noise")
const animalChoice = (emoji) => {
    animalNoiseContainer.innerHTML = null
  if (emoji === "🐷") {
    animalNoise.innerText = "oink oink"
  }
  if (emoji === "🐶") {
    animalNoise.innerText = "woof woof"
  }
  if (emoji === "🐱") {
    animalNoise.innerText = "meow meow"
  }
  if (emoji === "🐔") {
    animalNoise.innerText = "cluck cluck"
  }
  animalNoiseContainer.appendChild(animalNoise)
};
dropdown.onchange = (event) => animalChoice(event.target.value);
