/*
 * Title: sprite.js
 * Description: Trying out a new way to load, and manage sprite objects
 * Author: Beau Bouchard (@beaubouchard)
 */
 
 //Register Namespace
 var Sprite = Sprite||{};
 
 //Constructor for Characters (moving sprites, NPC, or Player)
Sprite.Character = function Sprite_Character(inc_source,inc_size,inc_frames){
  	this.source = inc_source;
	this.size = inc_size;
	this.frames = inc_frames

}
//Constructor for Enviroment Objects (Plants, buildings, fences)
 Sprite.Enviroment = function Sprite_Enviroment(){

}

//Character functionality
function Sprite.Character.prototype(inc_source,inc_size) {
	this.x = 0;
	this.y = 0;
	this.source = inc_source;
	this.size = inc_size;
	
	
	initialize: function (inc_x,inc_y) {
		this.x = inc_x;
		this.y = inc_y;
	}
	toString: function () {
		
		console.log("X:"+this.x+"\nY:" + this.y);
	}
	//Render: function Sprite_Character_Render(inc_canvasID,inc_x,inc_y){
		//var mcanvas = document.getElementByID(inc_canvasID);
		//var mcontent = canvas.getContext("2d"); 
		//I may just pass in the context to render
		
		//this.x = inc_x ||canvas.width/2
		//this.y = inc_y || canvas.height/2;
	//}
	
	//Walk: function Sprite_Character_Walk(inc_canvasID,fromx,fromy,tox,toy){}
	
	/*Plant: Function*/
	
	//if sprite is facing different directions, use different sprites
	
}

//static variables
Sprite.Character.Viewdistance = 5; 





