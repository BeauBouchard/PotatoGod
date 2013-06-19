/*
 * Title: app.js
 * Description: app 
 * Author: Beau Bouchard (@beaubouchard)
 */
 
 
var canvas = document.getElementByID("canvas");
var content = canvas.getContext("2d"); 

// Game Object
// Controls gamestate,
function game(){
    this.state = 0;
    this.score = 0;
}

game.prototype = {
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
   }
}

//This is the main game loop for running.
function main(){

}
 
 function checkCollisions() {
 
 }
