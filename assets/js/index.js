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
let on = false;
//tells us if the player has won the game or not
let win;