//variable to keep track of the order of the lights:
let order = [];
//the order that the player is pressing the lights in:
let playerOrder = [];
//the number of flashes that have appeared in the game:
let flash;
//to keep track of what turn the user is on:
let turn;
//a boolean on if the player is hitting the correct colours or not:
let good;
//a boolean to keep track of weather its the players turn or the computers turn:
let compTurn;

let intervalId;
//this checks weather the strict box has been checked:
let accuracy = false;
//this is for the noises that the panels make when flashing:
let noise = true;
//checks if the power button has been turned on for the game:
let power = false;
//tells us if the player has won the game or not:
let win;

//the digital display of turns in the game w/ css selector #turn:
const turnCounter = document.querySelector("#turn");

//variables for the 4 panels in the game:
const farLeft = document.querySelector("#farleft");
const middleLeft = document.querySelector("#middleleft");
const middleRight = document.querySelector("#middleright");
const farRight = document.querySelector("#farright");

//variables for the switches in the game:
const accuracyButton = document.querySelector("#accuracy");
const powerButton = document.querySelector("#power");
const startButton = document.querySelector("#start");

//for checking weather the strict button has been activated or not:
accuracyButton.addEventListener('click', (event) => {
    if(accuracyButton.checked == true){
      accuracy = true;
    } else {
      accuracy = false;
    }
});

//what to do once the power button has been engaged:
powerButton.addEventListener('click', (event) => {
    if(powerButton.checked == true){
        power = true;
        turnCounter.innerHTML = "-"; //to create the lines in counter to show power button has been activated:
    } else {
        power = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId); // stops the game from flashing after the game has ended:
    }
});

//this activates the game if/when the start button has been 'clicked':
startButton.addEventListener('click', (event) => {
    if (power || win) {
        play();
    }
});

//this function included variables so that the game resets after use:
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
      order.push(Math.floor(Math.random() * 4) + 1); //generating numbers for the pattern:
    }
    compTurn = true;

    //this sets the time between flashes for the game:
    intervalId = setInterval(gameTurn, 800);
  }

  function gameTurn() {
    power = false; //stops user from being able to click buttons while the computers turn is flashing:
  
    //if the amount of flashes equals the turn counter, this means the computers turn is over:
    if (flash == turn) {
      clearInterval(intervalId);
      compTurn = false;
      clearColor();
      power = true;
    }
    if (compTurn) {
      clearColor();
      setTimeout(() => {
        if (order[flash] == 1) one();
        if (order[flash] == 2) two();
        if (order[flash] == 3) three();
        if (order[flash] == 4) four();
        flash++;
      }, 200);
    }
  }

  /*
this function is for the noise to be heard in the game and changing the css  
using .style to make the panels change color when they flash for each of the panels
*/
function one() {
    if (noise) {
      let audio = document.getElementById("clip1");
      audio.play();
    }
    noise = true;
    farLeft.style.backgroundColor = "lightgreen";
  }

  function two() {
    if (noise) {
      let audio = document.getElementById("clip2");
      audio.play();
    }
    noise = true;
    middleLeft.style.backgroundColor = "tomato";
  }
  
  function three() {
    if (noise) {
      let audio = document.getElementById("clip3");
      audio.play();
    }
    noise = true;
    middleRight.style.backgroundColor = "yellow";
  }
  
  function four() {
    if (noise) {
      let audio = document.getElementById("clip4");
      audio.play();
    }
    noise = true;
  farRight.style.backgroundColor = "lightskyblue";
}

//this is to revert panels to orignal colors after flashing:
function clearColor() {
    farLeft.style.backgroundColor = "darkgreen";
    middleLeft.style.backgroundColor = "darkred";
    middleRight.style.backgroundColor = "goldenrod";
    farRight.style.backgroundColor = "darkblue";
  }

  //this is what the colors will flash to:
  function flashColor() {
    farLeft.style.backgroundColor = "lightgreen";
    middleLeft.style.backgroundColor = "tomato";
    middleRight.style.backgroundColor = "yellow";
    farRight.style.backgroundColor = "lightskyblue";
  }


farLeft.addEventListener('click', (event) => {
    if (power) {
      playerOrder.push(1);
      check();
      one();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  middleLeft.addEventListener('click', (event) => {
    if (power) {
      playerOrder.push(2);
      check();
      two();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  middleRight.addEventListener('click', (event) => {
    if (power) {
      playerOrder.push(3);
      check();
      three();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })
  
  farRight.addEventListener('click', (event) => {
    if (power) {
      playerOrder.push(4);
      check();
      four();
      if(!win) {
        setTimeout(() => {
          clearColor();
        }, 300);
      }
    }
  })

/*
setting the amount of rounds to win and setting parameters for player loosing
and to get the game to restart flashing if the player hits an incorrect panel
*/
function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
      good = false;
  
    if (playerOrder.length == 3 && good) {
      winGame();
    }
  
    if (good == false) {
      alert("The greatest teacher, failure is, better luck next time soldier!");
      flashColor();
      turnCounter.innerHTML = "NO!";
      setTimeout(() => {
        turnCounter.innerHTML = turn;
        clearColor();
  
        if (accuracy) {
          play();
        } else {
          compTurn = true;
          flash = 0;
          playerOrder = [];
          good = true;
          intervalId = setInterval(gameTurn, 800);
        }
      }, 800);
  
      noise = false;
    }
  
    if (turn == playerOrder.length && good && !win) {
      turn++;
      playerOrder = [];
      compTurn = true;
      flash = 0;
      turnCounter.innerHTML = turn;
      intervalId = setInterval(gameTurn, 800);
    }
  
  }

//for when the player wins the game:
function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    power = false;
    win = true;
    alert("Well done soldier, you've hit all the targets!");
  }
  
  