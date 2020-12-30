var database;
var game, form, player;
var gameState = 0;
var playerCount;


function setup() {
  createCanvas(500,500);
  database = firebase.database();
    
  game = new Game();
  game.getState();
  game.start();
}

function draw() {

}