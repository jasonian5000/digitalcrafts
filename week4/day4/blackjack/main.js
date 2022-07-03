const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const hitBtn = document.getElementById("hit-button");
const dealBtn = document.getElementById("deal-button");
const standBtn = document.getElementById("stand-button");
const clearBtn = document.getElementById("clear-button");
const selectDecks = document.getElementById("number-decks")
const playerPoints = document.getElementById("player-points");
const dealerPoints = document.getElementById("dealer-points");
const mainMessage = document.getElementById("main-message");
const mainImage = document.getElementById("main-image");
let aceCounter = 0;
let aceCompare = 0;
let dealerScore = 0;
let playerScore = 0;
let dealerCards = [];
let playerCards = [];
let deck = [];
hitBtn.disabled = true;
standBtn.disabled = true;
clearBtn.disabled = true;
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
  img.src = deck[0].imageSrc;
  hand.appendChild(img);
  score += deck[0].pointValue;
  points.innerText = score;
  cards.push(deck[0]);
  deck.splice(0, 1);
  return score;
};
const repeat = (makeDeck, times=1) => {
    makeDeck()
    times && --times && repeat(makeDeck, times)
}
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
  dealBtn.disabled = true;
  selectDecks.disabled = true
  hitBtn.disabled = false;
  standBtn.disabled = false;
  clearBtn.disabled = false;
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
  hitBtn.disabled = true;
  standBtn.disabled = true;
};
const lose = () => {
  mainMessage.innerText = "You lose!";
  mainImage.src = "./images/greedo.jpg";
  hitBtn.disabled = true;
  standBtn.disabled = true;
};
const tie = () => {
  mainMessage.innerText = "What?! It's a tie!";
  mainImage.src = "./images/chewbacca.png";
  hitBtn.disabled = true;
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
dealBtn.onclick = () => deal();
hitBtn.onclick = () => hit();
standBtn.onclick = () => stand();
clearBtn.onclick = () => location.reload();
window.addEventListener("DOMContentLoaded", () => {});
