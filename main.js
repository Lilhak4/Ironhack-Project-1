'use strict'


function main() {
  var container = null;
  var button = null;
  var game = null;
  var grid = null;
  var removeDivs = null;
  var restartButton = null;

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
    game = new Game(endGame);
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

  
  // ---------- GAME OVER SCREEN ---------- //
  //If webcam not possible, make end screen a gif of a loss, if win, gif of a winner.
  function endGame(){
    console.log('ended')
    game = null;
    buildGameOver();
  }

  function buildGameOver() {
    document.getElementById('main-container').remove();
    container = document.createElement('div');
    container.setAttribute('id', 'main-container');
    
    restartButton = document.createElement('button');
    restartButton.setAttribute('id', 'btn-restart');
    restartButton.innerText = 'Restart';
    container.appendChild(restartButton)
    document.body.appendChild(container);
    
    button.addEventListener('click', restartButton);
    restartGame();
  }

  function restartGame() {
    button.removeEventListener('click', restartButton);
    button.remove();
    


  }

  // function handleRestartClick {
  //   restartButton.removeEventListener('click', restartButton);
  //   restartButton.remove();
  //   buildSplash();
  // }

buildSplash();
}

window.addEventListener('load', main) 