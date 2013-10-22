window.onload = getMyLocation;

function getMyLocation() {
	/*check if geolocation is supported on user's browser*/
	if( navigator.geolocation) {
		/*displayLocation is a function pointer.  the getCurrentPosition() will call it with the arguments of the position.  What it does with the position will depend on the implementation of displayLocation()*/
		navigator.geolocation.getCurrentPosition(displayLocation,);
		
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