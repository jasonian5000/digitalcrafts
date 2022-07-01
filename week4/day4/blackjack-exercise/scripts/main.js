// dom manipulation
const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const hitBtn = document.getElementById("hit-button");
const dealBtn = document.getElementById("deal-button");
const standBtn = document.getElementById("stand-button");
const resetBtn = document.getElementById("reset")
const message = document.getElementById("message-area")
const p = document.createElement("p")

// starting variables
let dealerScore = 0;
let playerScore = 0;
let dealerCards = [];
let playerCards = [];
let deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// fuctions
const makeDeck = () => {
  for (let suit of suits) {
    for (const rank of ranks) {
      const card = {
        rank,
        suit,
        imageSrc: `./images/${rank}_of_${suit}.png`,
        pointValue: rank === 1 ? 11 : rank > 10 ? 10 : rank,
      };
      deck.push(card);
      deck.sort(() => Math.random() - 0.5);
    }
  }
};

const addCard = (hand, deck, cards, score) => {
  let img = new Image();
  img.src = deck[0].imageSrc;
  hand.appendChild(img);
  score += deck[0].pointValue;
  cards.push(deck[0]);
  deck.splice(0, 1);
  return score;
};

const deal = () => {
  // location.reload()
  makeDeck();
  console.log(deck)
  dealerScore = addCard(dealerHand, deck, dealerCards, dealerScore);
  playerScore = addCard(playerHand, deck, playerCards, playerScore);
  dealerScore = addCard(dealerHand, deck, dealerCards, dealerScore);
  playerScore = addCard(playerHand, deck, playerCards, playerScore);
    console.log(dealerCards);
    console.log(playerCards);
    console.log(deck)
  dealBtn.disabled = true;
  hitBtn.disabled = false;
  standBtn.disabled = false;
  if (playerScore === 21 && dealerScore === 21) {
    console.log("What?! It's a tie.");
    p.innerText = "What?! It's a tie";
    message.appendChild(p);
  }
  if (playerScore === 21 && dealerScore < 21) {
    win();
  }
  if (dealerScore === 21 && playerScore < 21) {
    lose();
  }
};

const hit = () => {
  if (playerCards.length < 2) {
    console.log("You have to deal first!");
    p.innerText = "You have to deal first!";
    message.appendChild(p);
  } else {
    playerScore = addCard(playerHand, deck, playerCards, playerScore);
  }
  isAce = aceCheck();
  console.log(isAce);
  if (playerScore > 21 && isAce === false) {
    lose();
  }
  if (playerScore > 21 && isAce === true) {
    playerScore -= 10;
  }
  if (playerScore === 21) {
    win();
  }
};

const stand = () => {
  if (playerCards.length < 2) {
    console.log("You have to deal first!");
    p.innerText = "You have to deal first!";
    message.appendChild(p);
  } else {
    while (dealerScore <= 16) {
      dealerScore = addCard(dealerHand, deck, dealerCards, dealerScore);
    }
    if (dealerScore > 21 || playerScore > dealerScore) {
      win();
    }
  }
  if (dealerScore > playerScore && dealerScore < 22) {
    lose();
  }
};

const win = () => {
  console.log("You win!");
  p.innerText = "You win!";
  message.appendChild(p);
  hitBtn.disabled = true;
  standBtn.disabled = true;
};

const lose = () => {
  console.log("You lose :(");
  p.innerText = "You lose!"
  message.appendChild(p)
  hitBtn.disabled = true;
  standBtn.disabled = true;
};

const aceCheck = () => {
  console.log(playerCards);
  for (const playerCard of playerCards) {
    isAce = playerCard.rank === 1;
    console.log(playerCard.rank);
    console.log(isAce);
    if (isAce === true) {
      return isAce;
      break;
    }
  }
  return isAce;
};

dealBtn.onclick = () => deal();
hitBtn.onclick = () => hit();
standBtn.onclick = () => stand();
resetBtn.onclick = () => location.reload()

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});
