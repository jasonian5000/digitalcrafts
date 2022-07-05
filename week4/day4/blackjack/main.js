const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const selectDecks = document.getElementById("select-decks");
const standBtn = document.getElementById("stand-button");
const dealHitBtn = document.getElementById("deal-hit-button");
const playerPoints = document.getElementById("player-points");
const dealerPoints = document.getElementById("dealer-points");
const resetBtn = document.getElementById("reset-button");
const mainMessage = document.getElementById("main-message");
const mainImage = document.getElementById("main-image");
const displayWins = document.getElementById("display-wins");
const displayLoses = document.getElementById("display-loses");
const betInput = document.getElementById("bet-input");
const betText = document.getElementById("bet-text");
const placeBetBtn = document.getElementById("place-bet-button");
const displayBank = document.getElementById("display-bank");
let winCounter = Number(sessionStorage.getItem("wins"));
let loseCounter = Number(sessionStorage.getItem("loses"));
if (winCounter === 0 && loseCounter === 0) {
  bankAmount = 500;
} else {
  bankAmount = Number(sessionStorage.getItem("bank"));
}
displayBank.innerText = `credits: ${bankAmount}`
displayWins.innerText = `wins: ${winCounter}`;
displayLoses.innerText = `loses: ${loseCounter}`;
let betAmount = 0;
let aceCounter = 0;
let aceCompare = 0;
let dealerScore = 0;
let playerScore = 0;
let dealerCards = [];
let playerCards = [];
let deck = [];
standBtn.disabled = true;
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const makeDeck = () => {
  for (let suit of suits) {
    for (const rank of ranks) {
      const card = {
        rank,
        suit,
        imageSrc: `./images/${rank}${suit}.png`,
        pointValue: rank === 1 ? 11 : rank > 10 ? 10 : rank,
      };
      deck.push(card);
      deck.sort(() => Math.random() - 0.5);
    }
  }
};
const addCard = (hand, deck, cards, points, score) => {
  let img = new Image();
  if (dealerCards.length === 0) {
    img.src = "./images/back.png";
  } else {
    img.src = deck[0].imageSrc;
  }
  hand.appendChild(img);
  score += deck[0].pointValue;
  points.innerText = score;
  cards.push(deck[0]);
  deck.splice(0, 1);
  return score;
};
const repeat = (makeDeck, times = 1) => {
  makeDeck();
  times && --times && repeat(makeDeck, times);
};
const deal = () => {
  repeat(makeDeck, Number(selectDecks.value));
  dealerScore = addCard(
    dealerHand,
    deck,
    dealerCards,
    dealerPoints,
    dealerScore
  );
  playerScore = addCard(
    playerHand,
    deck,
    playerCards,
    playerPoints,
    playerScore
  );
  dealerScore = addCard(
    dealerHand,
    deck,
    dealerCards,
    dealerPoints,
    dealerScore
  );
  playerScore = addCard(
    playerHand,
    deck,
    playerCards,
    playerPoints,
    playerScore
  );
  selectDecks.disabled = true;
  standBtn.disabled = false;
  if (playerScore === 21 && dealerScore === 21) {
    tie();
  }
  if (playerScore === 21 && dealerScore < 21) {
    win();
  }
  if (dealerScore === 21 && playerScore < 21) {
    lose();
  }
};
const hit = () => {
  playerScore = addCard(
    playerHand,
    deck,
    playerCards,
    playerPoints,
    playerScore
  );
  isAce = aceCheck();
  if (playerScore > 21 && isAce === aceCompare) {
    lose();
  }
  if (playerScore > 21 && isAce > aceCompare) {
    playerScore -= 10;
    playerPoints.innerText = playerScore;
    aceCompare += 1;
  }
  if (playerScore === 21) {
    win();
  }
};
const stand = () => {
  let img = new Image();
  img.src = dealerCards[0].imageSrc;
  dealerHand.removeChild(dealerHand.firstElementChild);
  dealerHand.replaceChild(img, dealerHand.childNodes[0]);
  while (dealerScore <= 16) {
    dealerScore = addCard(
      dealerHand,
      deck,
      dealerCards,
      dealerPoints,
      dealerScore
    );
  }
  if (dealerScore > 21 || playerScore > dealerScore) {
    win();
  }
  if (dealerScore > playerScore && dealerScore < 22) {
    lose();
  }
  if (playerScore === dealerScore) {
    tie();
  }
};
const win = () => {
  mainMessage.innerText = "You win!";
  mainImage.src = "./images/hansolo.png";
  standBtn.disabled = true;
  winCounter += 1;
  sessionStorage.setItem("wins", winCounter);
  displayWins.innerText = `wins: ${winCounter}`;
  bankAmount += betAmount;
  sessionStorage.setItem("bank", bankAmount)
  displayBank.innerText = `credits: ${bankAmount}`;
};
const lose = () => {
  mainMessage.innerText = "You lose!";
  mainImage.src = "./images/greedo.jpg";
  standBtn.disabled = true;
  loseCounter += 1;
  sessionStorage.setItem("loses", loseCounter);
  displayLoses.innerText = `loses: ${loseCounter}`;
  bankAmount -= betAmount;
  sessionStorage.setItem("bank", bankAmount);
  displayBank.innerText = `credits: ${bankAmount}`;
};
const tie = () => {
  mainMessage.innerText = "What?! It's a tie!";
  mainImage.src = "./images/chewbacca.png";
  standBtn.disabled = true;
};
const aceCheck = () => {
  let aceCounter = 0;
  for (const playerCard of playerCards) {
    if (playerCard.rank === 1) {
      aceCounter += 1;
    }
  }
  return aceCounter;
};
const resetGame = () => {
  sessionStorage.setItem("loses", "0");
  sessionStorage.setItem("wins", "0");
  sessionStorage.setItem("bank", "500")
  location.reload();
};

const dealHitSwitch = () => {
  if (mainMessage.innerText !== "Welcome to the Cantina") {
    location.reload();
  }
  if (
    playerCards.length >= 2 &&
    mainMessage.innerText === "Welcome to the Cantina"
  ) {
    hit();
  }
  if (
    playerCards.length < 2 &&
    mainMessage.innerText === "Welcome to the Cantina"
  ) {
    deal();
  }
};
const bet = () => {
  let betCheck = Number(betInput.value);
  if (isNaN(betCheck)) {
    betText.innerText = "You must enter a number";
  }
  if (betCheck > bankAmount || betCheck < 5) {
    betText.innerText = `Must be between 5 and ${bankAmount} credits`;
  }
  if (betCheck <= bankAmount && betCheck > 4) {
    betText.innerText = `Bet Amount: ${betCheck} credits`;
    betAmount = betCheck;
    placeBetBtn.disabled = true
  }
  if (bankAmount < 5) {
    betText.innerText = "You don't have enough credits"
    placeBetBtn.disabled = true
  }
  betInput.value = "";
};
dealHitBtn.onclick = () => dealHitSwitch();
standBtn.onclick = () => stand();
resetBtn.onclick = () => resetGame();
placeBetBtn.onclick = () => bet();
window.addEventListener("DOMContentLoaded", () => {});