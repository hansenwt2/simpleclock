// Adds '0' strings to hours, minutes, seconds values for formatting (00:00:00)
function addZero(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}

// Creates date object and prints formatted time to 'result' area.
function alarmClockTime () {
	var currentTime = new Date();
	var hour = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	
	// Ternary operator (?) for conditional statement to get meridiem.
	var meridiem = currentTime.getHours() >= 12 ? "PM" : "AM";
	
	// Concatenated time string.
	var currentTimeDisplay = addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + meridiem;
	
	// CSS styling in JS?
	document.getElementById('result').style.color = "white";

	document.getElementById('result').innerHTML = currentTimeDisplay;
}

// setInterval() runs function every x milliseconds (e.g. 1000 ms = 1 second).
setInterval(function () {alarmClockTime()}, 1000);