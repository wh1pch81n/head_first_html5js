function handleButtonClick () {
	alert("button was clicked!");
}

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}

window.onload = init;