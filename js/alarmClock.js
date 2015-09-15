function addZero(value) {
    if(value < 10) {
        return '0' + value;
    } else {
        return value;
    }
}

function alarmClockTime () {
	var currentTime = new Date();
	var hour = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridiem = currentTime.getHours() > 12 ? "PM" : "AM";
	var currentTimeDisplay = addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + meridiem;
	document.getElementById('result').style.color = "white";
	document.getElementById('result').innerHTML = currentTimeDisplay;
}

setInterval(function () {alarmClockTime()}, 1000);