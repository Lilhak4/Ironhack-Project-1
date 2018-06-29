'use strict';

function Cards(cb) {
  this.array = [];
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairGuessed = 0;
  this.cb = cb
}

Cards.prototype.buildGrid = function() {
  var container = document.getElementById('main-container');
  var cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]
  //var shuffledArray = 

  for (var ix = 0; ix < cards.length; ix++) {
    var card = document.createElement('div');
    var id = "card-" + cards[ix]
    card.setAttribute('id', id)
    card.classList.add('hidden')
    card.innerText = cards[ix];
    card.style.backgroundImage = `url(images/memory${ix}.svg)`
    card.classList.add('card');
    card.addEventListener('click', this.handleCardClick);
    cards[ix] = card;
  }

  this.shuffle(cards);

  cards.forEach(function(card) {
    container.appendChild(card);
  })
}

Cards.prototype.checkIfPair = function() {
  var firstCard = this.pickedCards[0];
  var secondCard = this.pickedCards[1];
  
  if (firstCard.innerText === secondCard.innerText) {
    this.pairGuessed += 1;
    this.pairsClicked += 1;
    this.resetPairsClicked();
    this.handleRightPair(firstCard, secondCard);
    return true;
  } else {
    this.pairsClicked += 1
    this.handleWrongPair();
    this.resetPairsClicked();
    return false;
  }
}



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

Cards.prototype.handleRightPair = function(fc, sc) {
  // remove event listener
  console.log(fc, sc)
  fc.removeEventListener('click', this.cb);
  sc.removeEventListener('click', this.cb);

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