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