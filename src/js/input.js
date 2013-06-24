 // Event listener for keystroke codes
var keyStroke = {};
addEventListener("keydown", function (e) {
  keyStroke[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
		delete keyStroke[e.keyCode];
}, false);
