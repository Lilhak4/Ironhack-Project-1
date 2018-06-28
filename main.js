'use strict'


function main() {
  var container = null;
  var button = null;
  var game = null;
  var grid = null;

  // ---------- SPLASH SCREEN ---------- //

  function buildSplash() {
    container = document.getElementById('main-container');
    button = document.createElement('button');
    button.setAttribute('id', 'btn-start');
    button.innerText = 'Start!!!';
    container.appendChild(button);

    button.addEventListener('click', handleStartClick);
  }  


  function handleStartClick() {
    button.removeEventListener('click', handleStartClick);
    button.remove();
    buildGame();
  }

  // ---------- GAME SCREEN ---------- //

  function buildGame() {
    playGame();
  }

  

  function playGame() {
    game = new Game();
    game.start();
    var cardsElements = document.querySelectorAll('#main-container div');
    cardsElements.forEach(function (card) {
      card.addEventListener('click', handleCardClick);
    });
    // event.currentTarget.card;
  }

  function handleCardClick(event) {
    var clickedCard = event.currentTarget;
    game.toggleClickedCard(clickedCard);
    game.saveClickedCard(clickedCard)
  }

  
  // ---------- AME OVER SCREEN ---------- //

  

buildSplash();
}

window.addEventListener('load', main) 