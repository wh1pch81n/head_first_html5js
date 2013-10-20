function handleButtonClick () {
	var textInput = document.getElementById("songTextInput")
	var songName = textInput.value;
	if (songName == "") {
		alert("Please enter a song name then submit");
	} else {
		alert("Adding " + songName);
	}
}

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}

window.onload = init;