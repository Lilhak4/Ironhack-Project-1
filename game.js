'use strict'

function Game(cb) {
  this.callback = cb;

  this.turns = 7;
  this.timer = 60;
  this.isEnded = false;
  this.cards = null;
  this.timerNode = document.getElementById('header-right');
  this.win = false;

}

Game.prototype.start = function() {
  this.cards = new Cards();
  this.cards.buildGrid();
  this.time()
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
  console.log(this.cards.pairGuessed)
}

//----------TIMER----------//
//starts when click on a div. when hits zero, goes to game over screen 

Game.prototype.time = function () {
  // time = 60;
  var self = this
  self.intervalId = setInterval(function () {
    self.checkWin()
    if (self.isEnded === true){
      clearInterval(self.intervalId)
      self.callback(self.win);
    }
    // var secondsTimer = document.getElementById('timer-count').innerText = self.time;
    self.timer -= 1;
    self.timerNode.innerText = self.timer;
    if (self.timer <= 0) {
      self.isEnded = true;
      self.timerNode.innerText = '';
      console.log(self.isEnded); 
      // self.timer = 60
      // self.inputWord();
    }
  }, 1000)

  Game.prototype.checkWin = function() {
    if (this.cards.pairGuessed === 10) {
      this.win = true;
      this.isEnded = true;
    }
  }
}