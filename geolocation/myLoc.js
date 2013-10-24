window.onload = getMyLocation;

function getMyLocation() {
	/*check if geolocation is supported on user's browser*/
	if( navigator.geolocation) {
		/*displayLocation is a function pointer.  the getCurrentPosition() will call it with the arguments of the position.  What it does with the position will depend on the implementation of displayLocation()*/
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
		/*additionally we can add an error handeler*/
	} else {
		alert("Oops, no geo location support");
	}
}

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var div = document.getElementById("location");
	div.innerHTML = "Your location is: <br>"
	+ "Latitude: " + latitude + "<br>"
	+ "Longitude: " + longitude + "<br>";
	
	
	var km = computeDistance( position.coords, ourCoords);
	var distance = document.getElementById("distance");
	distance.innerHTML = "You are " + km + " km from the Wickedly smart HQ";
}

function displayError(error) {
	//this is how we make static objects...but we are using it as a hybrid of enum and array.
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied by user",
		2: "Position is not available",
		3: "Request timed out"
	}
	
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		/*error DOT message provides additional info for the error*/
		errorMessage += " " + error.message;
	}
	
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

function computeDistance( startCoords, destCoords) {
		
	var startPt = {
	latitudeRadians: degreesToRadians( startCoords.latitude),
	longitudeRadians: degreesToRadians( startCoords.longitude)
	}

	var destPt = {
	latitudeRadians: degreesToRadians(destCoords.latitude),
	longitudeRadians: degreesToRadians(destCoords.longitude)
	}

	var radiusOfEarthKM = 6371;
	var distance = Math.acos(
							 Math.sin(startPt.latitudeRadians)
							 * Math.sin(destPt.latitudeRadians)
							 + Math.cos(startPt.latitudeRadians)
							 * Math.cos(destPt.latitudeRadians)
							 * Math.cos(startPt.longitudeRadians - destPt.longitudeRadians)
							 ) * radiusOfEarthKM;
	
	return distance;
}

function degreesToRadians(degrees) {
	return (degrees * Math.PI)/ 180;
}

var ourCoords = {
latitude: 47.624851,
longitude: -122.52099
}
