console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Player1',
    hand: [],
    points: 0
  },
  {
    name: 'Player2',
    hand: [],
    points: 0
  },
  {
    name: 'Player3',
    hand: [],
    points: 0
  },
  {
    name: 'Player4',
    hand: [],
    points: 0
  }
];

const deck = [
  { rank: 'Ace', suit: 'Hearts' }, { rank: 2, suit: 'Hearts' },
  { rank: 3, suit: 'Hearts' }, { rank: 4, suit: 'Hearts' },
  { rank: 5, suit: 'Hearts' }, { rank: 6, suit: 'Hearts' },
  { rank: 7, suit: 'Hearts' }, { rank: 8, suit: 'Hearts' },
  { rank: 9, suit: 'Hearts' }, { rank: 10, suit: 'Hearts' },
  { rank: 'Jack', suit: 'Hearts' }, { rank: 'Queen', suit: 'Hearts' },
  { rank: 'King', suit: 'Hearts' }, { rank: 'Ace', suit: 'Diamonds' },
  { rank: 2, suit: 'Diamonds' }, { rank: 3, suit: 'Diamonds' },
  { rank: 4, suit: 'Diamonds' }, { rank: 5, suit: 'Diamonds' },
  { rank: 6, suit: 'Diamonds' }, { rank: 7, suit: 'Diamonds' },
  { rank: 8, suit: 'Diamonds' }, { rank: 9, suit: 'Diamonds' },
  { rank: 10, suit: 'Diamonds' }, { rank: 'Jack', suit: 'Diamonds' },
  { rank: 'Queen', suit: 'Diamonds' }, { rank: 'King', suit: 'Diamonds' },
  { rank: 'Ace', suit: 'Clubs' }, { rank: 2, suit: 'Clubs' },
  { rank: 3, suit: 'Clubs' }, { rank: 4, suit: 'Clubs' },
  { rank: 5, suit: 'Clubs' }, { rank: 6, suit: 'Clubs' },
  { rank: 7, suit: 'Clubs' }, { rank: 8, suit: 'Clubs' },
  { rank: 9, suit: 'Clubs' }, { rank: 10, suit: 'Clubs' },
  { rank: 'Jack', suit: 'Clubs' }, { rank: 'Queen', suit: 'Clubs' },
  { rank: 'King', suit: 'Clubs' }, { rank: 'Ace', suit: 'Spades' },
  { rank: 2, suit: 'Spades' }, { rank: 3, suit: 'Spades' },
  { rank: 4, suit: 'Spades' }, { rank: 5, suit: 'Spades' },
  { rank: 6, suit: 'Spades' }, { rank: 7, suit: 'Spades' },
  { rank: 8, suit: 'Spades' }, { rank: 9, suit: 'Spades' },
  { rank: 10, suit: 'Spades' }, { rank: 'Jack', suit: 'Spades' },
  { rank: 'Queen', suit: 'Spades' }, { rank: 'King', suit: 'Spades' }
];

playGame(players, 4);

function playGame(playersArr, cardsInHand) {
  console.log('=============================================');
  console.log("======= WELCOME TO DANIEL'S CARD GAME =======");
  console.log('===== Each player will be dealt', cardsInHand, 'cards =====');
  console.log('== The player with the highest score wins! ==');
  console.log('=============================================');
  dealHands(players, cardsInHand);
  logPlayerHands(playersArr);
  console.log('=============================================');
  calcScores(playersArr, cardsInHand);
  console.log('=============================================');
}

function dealHands(arrOfPlayers, numCards) {
  const cardsDealt = [];
  for (let i = 0; i < numCards; i++) {
    for (let i = 0; i < arrOfPlayers.length; i++) {
      let randomCard = Math.floor(Math.random() * 52);
      while (cardsDealt.includes(randomCard)) {
        randomCard = Math.floor(Math.random() * 52);
      }
      cardsDealt.push(randomCard);
      arrOfPlayers[i].hand.push(deck[randomCard]);
    }
  }
}

function logPlayerHands(playersArr) {
  for (const player of playersArr) {
    let hand = '';
    for (const card of player.hand) {
      hand += ' [' + card.rank + ' of ' + card.suit + ']';
    }
    console.log(player.name + ' has' + hand);
  }
}

function calcScores(playersArr, numCards) {
  let highestScore = 0;
  for (const player of players) {
    let playerScore = 0;
    for (let i = 0; i < player.hand.length; i++) {
      if (player.hand[i].rank === 'Ace') playerScore += 11;
      else if (player.hand[i].rank === 'King' ||
               player.hand[i].rank === 'Queen' ||
               player.hand[i].rank === 'Jack') {
        playerScore += 10;
      } else playerScore += player.hand[i].rank;
    }
    if (playerScore > highestScore) highestScore = playerScore;
    player.points = playerScore;
  }
  const winners = playersArr.filter(winner => winner.points === highestScore);
  if (winners.length > 1) tieBreaker(winners, numCards);
  else {
    console.log('=============================================');
    console.log(`${winners[0].name} has won with ${winners[0].points} points!`);
  }
}

function tieBreaker(playersArr, numCards) {
  let playersStr = '';
  for (const player of playersArr) {
    player.hand = [];
    playersStr += '[' + player.name + '] ';
  }
  console.log('We have a tie between:', playersStr + '');
  dealHands(playersArr, numCards);
  logPlayerHands(playersArr);
  calcScores(playersArr);
}
