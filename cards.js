'use strict';

function Cards() {
  this.array = [];
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairGuessed = 0;
}

Cards.prototype.buildGrid = function() {
  var container = document.getElementById('main-container');
  var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]
  var shuffledArray = this.shuffle(cards); // = shuffle(cards)

  for (var ix = 0; ix < cards.length; ix++) {
    var card = document.createElement('div');
    var id = "card-" + shuffledArray[ix]
    card.setAttribute('id', id)
    card.classList.add('hidden')
    card.innerText = shuffledArray[ix]; 
    container.appendChild(card);
  
    card.addEventListener('click', this.handleCardClick);
  }
}

Cards.prototype.checkIfPair = function() {
  var firstCard = this.pickedCards[0];
  var secondCard = this.pickedCards[1];
  
  if (firstCard.innerText === secondCard.innerText) {
    this.pairGuessed += 1;
    this.pairsClicked += 1;
    this.resetPairsClicked();
    this.handleRightPair();
    return true;
  } else {
    this.pairsClicked += 1
    this.handleWrongPair();
    this.resetPairsClicked();
    return false;
  }
}

// Helper Functions


Cards.prototype.pickCard = function(card) {
  this.pickedCards.push(card);
  if (this.pickedCards.length === 2) {
    this.checkIfPair();
  }
}

Cards.prototype.shuffle = function(cards) {
  var j, x, i;
  for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = cards[i];
      cards[i] = cards[j];
      cards[j] = x;
    }
  return cards;
}

Cards.prototype.handleRightPair = function() {
  // remove event listener

}

Cards.prototype.resetPairsClicked = function() {
  this.pickedCards = [];
}
  
Cards.prototype.handleWrongPair = function() {
  this.pickedCards.forEach(function (card) {
    setTimeout(function (){
      card.classList.toggle('hidden');
    }, 1000)

  });
}