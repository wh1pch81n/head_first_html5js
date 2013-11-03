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
	var drawShape;
	
	for (var i = 0; i < 20; i++) {
		if( shape == "squares") {
			drawShape = drawSquare;
		} else if (shape == "triangles") {
			drawShape = drawTriangle;
		} else if ( shape == "circles") {
			drawShape = drawCircle;
		} else if (shape == "smiles") {
			drawShape = drawSmiley;
		} else if (shape == "everything") {
			var num = randomValue(4);
			if ( num == 0) {
				drawShape = drawSquare;
			} else if (num == 1) {
				drawShape =  drawTriangle;
			} else if (num == 2) {
				drawShape = drawCircle;
			} else if (num == 3) {
				drawShape = drawSmiley;
			}
		}
		drawShape(canvas,context);
	}
	drawText(canvas,context);
	var twitterBird = new Image();
	twitterBird.src = "twitterBird.png";
	//we use the onload handler to make the twitter bird appear after everything is parsed.
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};
}

function drawSmiley( canvas, context) {
	var x,y,radius,startAngle,endAngle,direction;
	x = randomValue( canvas.width);
	y = randomValue( canvas.height);
	radius = randomValue( 10)+10;
	startAngle = 0;
	endAngle = Math.PI * 2;
	//draw face
	context.beginPath();
	context.arc(x,y,radius,startAngle,endAngle,direction);
	context.closePath();
	context.fillStyle = "yellow";
	context.fill();
	context.strokeStyle = "grey";
	context.stroke();
	//draw left eye
	context.beginPath();
	iradius = radius/4;
	context.arc(x-iradius*1.5,y-iradius,iradius,startAngle,endAngle,direction);
	context.closePath();
	context.fillStyle = "grey";
	context.fill();
	//draw right eye
	context.beginPath();
	context.arc(x+iradius*1.5,y-iradius,iradius,startAngle,endAngle,direction);
	context.closePath();
	context.fillStyle = "grey";
	context.fill();
	//draw mouth
	//it seems that the circle is upside down so you must give negative radians to have the values you expect based off the unit circle
	startAngle = -(Math.PI)* ( 5.0/4.0);
	endAngle = -(Math.PI)* (7.0/4.0);
	direction = true;
	context.beginPath();
	context.arc(x,y-iradius,radius,startAngle,endAngle,direction);
	
	//context.lineWidth = 5;
	context.stroke();
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

function updateTweets(tweets) {
	var tweetSelection = document.getElementById("pickATweet");
	for (var i = 0; i < tweets.length; i++) {
		tweet = tweets[i];
		var option = document.createElement("option");
		option.text = tweet.text;
		option.value = tweet.text.replace("\"", "'");
		
		tweetSelection.options.add(option);
	}
	tweetSelection.selectedIndex = 0;
}

function drawText(canvas, context) {
	var selectObj = document.getElementById("textColor");
	context.fillStyle = selectObj[selectObj.selectedIndex].value;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this Tweet", 20, 40);
	
	selectObj = document.getElementById("pickATweet");
	context.font = "italic 1.2em serif";
	context.fillText(selectObj[selectObj.selectedIndex].value, 30, 100);
	
	context.textAlign = "right";
	context.font = "bold 1em sans-serif";
	context.fillText("and all I got was this lousy t-shirt!", canvas.width-20, canvas.height-40);
	
}