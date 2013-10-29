window.onload = function() {
	var previewButton = document.getElementById("previewButton");
	previewButton.onclick = previewHandler;
	
//	var canvas = document.getElementById("tShirtCanvas");
//	if (canvas.getContext == null) return;
//	var context = canvas.getContext("2d"); //you need a 2d context from canvas in order to draw
//
//	var xPos = 10;
//	var xLen = 100;
//	var yPos = 10;
//	var yLen = 100;
//	var blackRect = context.fillRect( xPos, yPos, xLen, yLen);
//	
//	var emptyRect = context.strokeRect( xPos + 200, yPos, xLen, yLen);
//	
//	context.setPixel(400, yPos);
	//notice that the fillRect doesn't have color... more later
	
	
};

function previewHandler() {
	var canvas = document.getElementById("tShirtCanvas");
	var context = canvas.getContext("2d");
	
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	
	if( shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare( canvas, context);
		}
	}
}

function drawSquare( canvas, context) {
	//caluclate random y position for square
	var y = Math.floor(Math.random() * canvas.height);
	//calculate random x position for square
	var x = Math.floor(Math.random() * canvas.width);
	//calculate random width for square
	var w = Math.floor(Math.random() * 20);
	//set the fillstyle to light blue
	context.fillstyle = "lightblue";
	//draw a square at position x, y, with width w
	context.fillRect(x, y, w, w);
	
}