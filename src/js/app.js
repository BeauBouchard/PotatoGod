/*
 * Title: app.js
 * Description: app 
 * Author: Beau Bouchard (@beaubouchard)
 */
 
 
var canvas = document.getElementByID("canvas");
var content = canvas.getContext("2d"); 

// Game Object

// Controls gamestate,
function Game(){
    this.state = 0;
    this.score = 0;;
    this.sprites = [];
}

Game.prototype = {
   getinfo: function() {
      return this.state;
   }
   getGameState: function() {
      return this.state;
   }
   getGameScore: function() {
      return this.score;
   }
   advanceGameState: function () {
      this.state ++;
   }
   reset: function () {
      this.state = 0;
      this.score = 0;
      this.firstRun();
   }
   firstRun: function () {
    //game just started.
    //reset score to 0, just to make sure
      this.score = 0;
      this.state = 0;
      //reset characters?
      //
   }
   start: function() {
      this.firstRun();
   }
   initializePlayer: function() {
       var Player = Object.create(Sprite.Character())
   }
   update: function() {
      //call render of sprites?
      //
   }
   
}


//Creating Game Object
var game = Object.create(Game.prototype);
game.start();

//This is the main game loop for running.
var thentime;
function main(){
     var now = Date.now();
     var delta = (now - thentime) / 1000.0;
     
     game.update(delta);

}
 
 function checkCollisions() {
 
 }
