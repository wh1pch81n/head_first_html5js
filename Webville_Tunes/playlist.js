function handleButtonClick () {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	if (songName == "") {
		alert("Please enter a song name then submit");
	} else {
		alert("Adding " + songName);
		var li_element = document.createElement("li");
		li_element.innerHTML = songName;
		document.getElementById("playlist").appendChild(li_element);
		save(songName);
		textInput.value = "";
		
	}
}

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	loadPlaylist();
}

window.onload = init;