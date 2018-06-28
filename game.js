'use strict'

function Game() {
  this.turns = 7;
  this.timer = 60;
  this.isEnded = false;
  this.cards = null;
}

Game.prototype.start = function() {
  this.cards = new Cards();
  this.cards.buildGrid();
}

Game.prototype.toggleClickedCard = function(card) {  
  card.classList.toggle('hidden');
  
  //use currentTarget and push clicked div into pickedCards array - done
  //next div clicked we would push into the same array to compare - done
  //use if condition to check if card is a pair or not
  //If cards are pair, we want to remove divs from game board and add 1 to pairs guessed
  //If cards are not a pair, then we toggle hidden on both divs to turn them around again
  //
  // card.classList.toggle('.hidden')
}

Game.prototype.saveClickedCard = function(card) {
  this.cards.pickCard(card)
}

//----------TIMER----------//

// Game.prototype.timer = function () {
//   // time = 60;
//   var self = this
//   self.intervalId = setInterval(function () {
//     var secondsTimer = document.getElementById('timer-count').innerText = self.time;
//     self.time -= 1;
//     if (self.time < 0) {
//       clearInterval(self.intervalId);
//       self.time = 60
//       self.inputWord();
//     }
//   }, 1000)