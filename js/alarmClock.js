
// Creates date object and prints formatted time to 'result' area.
function alarmClockTime (_htmlElement) {
	var htmlElement = _htmlElement;
	var clock = new function() {}
	var currentTime;
	var hours;
	var minutes;
	var seconds;
	var meridiem;
	
	// upDateTime holds date object and displays to screen
	function updateTime() {
		currentTime = new Date();
		hours = retrieveHours();
		minutes = retrieveMinutes();
		seconds = retrieveSeconds();
		meridiem = getMeridiem();

		displayToScreen();	
	}
	
	// formatTime
	function formatTime(value) {
    	if(value < 10) {
        	return '0' + value;
    	} else {
        	return value;
    	}
	}
	
	// retrieveHours
	function retrieveHours () {
		h = parseInt(currentTime.getHours());
		h12 = ((h + 23) % 12) + 1;
		return formatTime(h12) + "*";
	}
	// retrieveMinutes
	function retrieveMinutes() {
		m = formatTime(currentTime.getMinutes()) + "*";
		return m;
	}
	// retrieveSeconds
	function retrieveSeconds() {
		s = formatTime(currentTime.getSeconds());
		return s;
	}
	
	// getMeridiem
	function getMeridiem () {
		var meridiem_ternary = currentTime.getHours() >= 12 ? "PM" : "AM";
		return meridiem_ternary;
	}

	// displayToScreen
	function displayToScreen () {
		var currentTimeDisplay = hours + minutes + seconds + " " + meridiem;
		document.getElementById(htmlElement).innerHTML = currentTimeDisplay;
		
	}
	// Sets updateTime every second
	setInterval(updateTime, 1000);

}

