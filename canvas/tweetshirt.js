window.onload = function() {
	var canvas = document.getElementById("tShirtCanvas");
	if (canvas.getContext == null) return;
	var context = canvas.getContext("2d"); //you need a 2d context from canvas in order to draw

	var xPos = 10;
	var xLen = 100;
	var yPos = 10;
	var yLen = 100;
	var blackRect = context.fillRect( xPos, yPos, xLen, yLen);
	
	var emptyRect = context.strokeRect( xPos + 200, yPos, xLen, yLen);
	
//	context.setPixel(400, yPos);
	//notice that the fillRect doesn't have color... more later
	
	
};