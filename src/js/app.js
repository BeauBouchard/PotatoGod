/*
 * Title: app.js
 * Description: app 
 * Author: Beau Bouchard (@beaubouchard)
 */
 
 


// Game Object

// Controls gamestate,
function Game(){
    this.state = 0;
    this.score = 0;
    this.tick = 0;
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
       var Player = Object.create(Sprite.Character.prototype);
       Player.initialize(canvas.width / 2,canvas.height / 2,"img/player.png",32);
       this.sprites["img/player.png"] = Player;
       Player.toString();
   }
   handleInput: function(inc_mod) {
    
        if ((38 in keyStroke )|| (87 in keyStroke)) {// up key stroke or 'w' key stroke
            //if(cdetect){player.y -= player.speed * inc_mod;}
       	    //else{player.y += player.speed * inc_mod*4;}
       	    //tick += inc_mod*5;
       	}
       	if ((40 in keyStroke) || (83 in keyStroke)) { // down key stroke or 's' key stroke
       	   	//if(cdetect){player.y += player.speed * inc_mod;}
       	   	//else{player.y -= player.speed * inc_mod*4;}
       		   //tick += inc_mod*5;
       	}
       	if ((37 in keyStroke) || (65 in keyStroke)){ // left key stroke or 'a' key stroke
       	   	//if(cdetect){player.x -= player.speed * inc_mod;}
       	   	//else{player.x += player.speed * inc_mod*4;}
       	   	//tick += inc_mod*5;
       
       	}
       	if ((39 in keyStroke) || (68 in keyStroke)) { // right key stroke or 'd' key stroke
       	   	//if(cdetect){player.x += player.speed * inc_mod;}
       	   	//else{player.x -= player.speed * inc_mod*4;}
       	   	//tick += inc_mod*5;
       	}
       
       	//if(tick >1){playerAnimate();tick=0;}
       
       	//action, or fire? button 
       	if ((32 in keyStroke) || (17 in keyStroke)) { // SPACE key stroke or CTRL key stroke
       		//Fire
       	}
   }
   update: function (inc_mod) { this.handleInput(inc_mod); } 
   
      //call render of sprites?
      //
   
   
}





// Start
var canvas = document.getElementByID("canvas");
var content = canvas.getContext("2d"); 
canvas.width = 1024;
canvas.height = 768;
document.getElementsById("game").append(canvas);


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
