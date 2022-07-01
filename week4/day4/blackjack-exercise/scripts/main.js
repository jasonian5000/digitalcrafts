const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const hitBtn = document.getElementById("hit-button");
const dealBtn = document.getElementById("deal-button");
const standBtn = document.getElementById("stand-button");
const resetBtn = document.getElementById("reset");
const message = document.getElementById("message-area");
const p = document.createElement("p");
let aceCounter = 0;
let aceCompare = 0;
let dealerScore = 0;
let playerScore = 0;
let dealerCards = [];
let playerCards = [];
let deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
  makeDeck();
  dealerScore = addCard(dealerHand, deck, dealerCards, dealerScore);
  playerScore = addCard(playerHand, deck, playerCards, playerScore);
  dealerScore = addCard(dealerHand, deck, dealerCards, dealerScore);
  playerScore = addCard(playerHand, deck, playerCards, playerScore);
  dealBtn.disabled = true;
  hitBtn.disabled = false;
  standBtn.disabled = false;
  if (playerScore === 21 && dealerScore === 21) {
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
    p.innerText = "You have to deal first!";
    message.appendChild(p);
  } else {
    playerScore = addCard(playerHand, deck, playerCards, playerScore);
  }
  isAce = aceCheck();
  if (playerScore > 21 && isAce === aceCompare) {
    lose();
  }
  if (playerScore > 21 && isAce > aceCompare) {
    playerScore -= 10;
    aceCompare += 1;
  }
  if (playerScore === 21) {
    win();
  }
};
const stand = () => {
  if (playerCards.length < 2) {
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
  p.innerText = "You win!";
  message.appendChild(p);
  hitBtn.disabled = true;
  standBtn.disabled = true;
};
const lose = () => {
  p.innerText = "You lose!";
  message.appendChild(p);
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
resetBtn.onclick = () => location.reload();
window.addEventListener("DOMContentLoaded", () => {});
