'use strict'
//----------VIDEO CODE----------//

function main() {
  var container = null;
  var button = null;
  var game = null;
  var grid = null;
  var removeDivs = null;
  var restartButton = null;
  var resultText = null;
  var resultGif = null;
  var video = null;
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
    container = document.getElementById('gif-win');
    container.remove();
    buildGame();
  }
  // ----------try to DOM gif onto container----------//
  // function keepBuilding() {
  //   container = document.getElementById('gif-win');
  //   img = document.createElement('img');
  //   img.setAttribute('', '/home/lilhak4/2018-06/Project-1/Project/Ironhack-Project-1/images/giphy.gif');
  //   container.appendChild(img);

  //   buildGame();
  // }

  // ---------- GAME SCREEN ---------- //

  function buildGame() {
    playGame();
  }

  

  function playGame() {
    game = new Game(endGame, handleCardClick);
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
  function endGame(win){
    console.log('ended')
    game = null;
    buildGameOver(win);
  }


  function buildGameOver(win) {
    video =document.createElement('video');
    video.setAttribute('id', 'webcam')
    video.setAttribute('autoplay', 'true')
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(function(mediaStream){
    window.stream = mediaStream;
    video.src = URL.createObjectURL(mediaStream);
    video.play();
    });
    resultText = document.createElement('h3')
    if (win) {
      resultText.innerText = 'Congratulations! You are a  winner!'
     } else {
      resultText.innerText = 'So sorry, you lost!'
    }
    
    // resultGif = document.createElement('img')
    // if (win) {
      
    // } else {
    //   var gif = document.getElementById('gif-win');
    //   var img = document.createElement('img');
    //   img.setAttribute('src', '/home/lilhak4/2018-06/Project-1/Project/Ironhack-Project-1/images/gif-men-in-black.gif');
    //   gif.appendChild(img);
    // }
    
    document.getElementById('main-container').remove();
    container = document.createElement('div');
    container.setAttribute('id', 'main-container');
    
    restartButton = document.createElement('button');
    restartButton.setAttribute('id', 'btn-restart');
    restartButton.innerText = 'Restart';
    container.appendChild(resultText)
    container.appendChild(video)
    container.appendChild(restartButton)
    document.body.appendChild(container);
    
    restartButton.addEventListener('click', handleRestartClick);
  }

  function handleRestartClick () {
    restartButton.removeEventListener('click', handleRestartClick);
    restartButton.remove();
    resultText.remove();
    video.remove();
    buildSplash();
  }

buildSplash();
}

window.addEventListener('load', main) 