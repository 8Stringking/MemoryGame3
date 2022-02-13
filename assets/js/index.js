//variable to keep track of the order of the lights
let order = [];
//the order that the player is pressing the lights in
let playerOrder = [];
//the number of flashes that have appeared in the gam
let flash;
//to keep track of what turn the user is on
let turn;
//a boolean on if the player is hitting the correct colours or not
let good;
//a boolean to keep track of weather its the players turn or the computers turn
let compTurn;

let intervalId;
//this checks weather the strict box has been checked
let strict = false;
//this is for the noises that the panels make when flashing
let noise = true;
//checks if the power button has been turned on for the game
let power = false;
//tells us if the player has won the game or not
let win;

//the digital display of turns in the game w/ css selector #turn
const turnCounter = document.querySelector("#turn");

//variables for the 4 panels in the game
const farleft = document.querySelector("#topLeft");
const middleleft = document.querySelector("#topright");
const middleright = document.querySelector("#bottomLeft");
const farright = document.querySelector("#bottomright");

//variables for the switches in the game
const strictButton = document.querySelector("#strict");
const powerButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

//for checking weather the strict button has been activated or not
strictButton.addEventListener('click', (event) => {
    if(strictButton.checked == true){
        strict = true;
    } else {
        strict = false;
    }
});

//what to do once the power button has been engaged
powerButton.addEventListener('click', (event) => {
    if(powerButton.checked == true){
        power = true;
        turnCounter.innerHTML = "-"; //to create the lines in counter to show power button has been activated
    } else {
        power = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId); // stops the game from flashing after the game has ended
    }
});

//this activates the game if/when the start button has been 'clicked'
startButton.addEventListener('click', (event) => {
    if (power || win) {
        play();
    }
});