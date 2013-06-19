/*
 * Title: app.js
 * Description: app 
 * Author: Beau Bouchard (@beaubouchard)
 */
 
 
var canvas = document.getElementByID("canvas");
var content = canvas.getContext("2d"); 

function game(){
    this.state = 0;
 
}

game.prototype = {
 getinfo: function() {
  return this.state;
 }
 getGameState: function() {
  return this.state;
 }
 advanceGameState: function () {
  this.state ++;
 }
 
}

//This is the main game loop for running.
function main(){

}
 
 function checkCollisions() {
 
 }
