window.onload = function() {
	var canvas = document.getElementById("tShirtCanvas");
	var context = canvas.getContext("2d"); //you need a 2d context from canvas in order to draw

	var xPos = 10;
	var xLen = 100;
	var yPos = 10;
	var yLen = 100;
	context.fillRect( xPos, yPos, xLen, yLen);
	//notice that the fillRect doesn't have color... more later
};