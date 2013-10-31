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
	
	fillBackgroundColor(canvas, context);
	
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	
	if( shape == "squares") {
		for (var squares = 0; squares < 20; squares++) {
			drawSquare( canvas, context);
		}
	} else if (shape == "triangles") {
		for (var t = 0; t < 20; t++) {
			drawTriangle( canvas, context);
		}
	} else if ( shape == "circles") {
		for (var c = 0; c < 20; c++) {
			drawCircle( canvas, context);
		}
	}
}

function drawCircle( canvas, context) {
	//trace the path of a circle
	context.beginPath();
	var x = randomValue(canvas.width);
	var y = randomValue(canvas.height);
	var radius = randomValue(20);
	var startAngle = 0;
	var endAngle = 2 * Math.PI;
	var direction = true;//true means trace it in ccw; false means cw
	context.arc(x, y, radius, startAngle, endAngle, direction);
	context.closePath();
	
	context.fillStyle = "lightgreen";
	context.fill();
}

function drawSquare( canvas, context) {
	//caluclate random y position for square
	var y = Math.floor(Math.random() * canvas.height);
	//calculate random x position for square
	var x = Math.floor(Math.random() * canvas.width);
	//calculate random width for square
	var w = Math.floor(Math.random() * 40);
	//set the fillstyle to light blue
	context.fillStyle = "lightblue";
	//draw a square at position x, y, with width w
	context.fillRect(x, y, w, w);
	
}

function drawTriangle( canvas, context) {
	//trace an invisible triangle
	context.beginPath();
	//set invisible pencil to an initial posotion
	var x =randomValue(canvas.width);
	var y =randomValue(canvas.height);
	context.moveTo(x, y);
	//draw invisable lines
	context.lineTo(x + (randomValue(40)-20), y + (randomValue(40)-20));
	context.lineTo(x + (randomValue(40)-20), y + (randomValue(40)-20));
	//draw line from current position to initial position
	context.closePath();
	
	//now we want to make the line visible
	//context.lineWidth = 5;
	//context.stroke();
	context.fillStyle = "red";
	context.fill();
}

/**
 returns a random Value between 0 and max
 */
function randomValue(max) {
	return Math.floor(Math.random() * max);
}

function fillBackgroundColor( canvas, context) {
	var selectObj = document.getElementById("bgColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;
	
	context.fillStyle = bgColor;
	context.fillRect(0,0,canvas.width, canvas.height);
}

function degreesToRandians(degrees) {
	return (degrees * Math.PI)/180;
}
