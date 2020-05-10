var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allplayers;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white");
  if(playerCount == 2){
    
    game.update(1);

  }
  if(gameState == 1){
   // clear();
    game.play();
  }
}
