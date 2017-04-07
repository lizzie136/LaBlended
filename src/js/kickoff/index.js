var config = require("../config");
var database = config.firebase.database;

var videoElement = document.getElementById("video");
var countdownElement = document.getElementById("countdown");
var continueElement = document.getElementById("kick-off-done");
continueElement && continueElement.addEventListener("click", goHome);

function goHome(){
	localStorage.setItem("kickoff", "done");
	window.location = "index.html";
}

var formatTime = function (restTime) {
	var minutes = parseInt(restTime / 60);
	var seconds = restTime % 60;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	if(countdownElement) document.getElementById("minutes").textContent = minutes;
	if(countdownElement) document.getElementById("seconds").textContent = seconds;
};

var videoRef = database.ref('video');
var restTime = 0;

videoRef.on('value', function(snapshot) {
	var video = snapshot.val();
	if (videoElement && video.restTime > 0) {
		restTime = video.restTime;
		var videoId = video.id;
		var videoUrl = "https://www.youtube.com/embed/" + videoId;
		videoElement.setAttribute("src", videoUrl);
		countdownElement.style.display = "block";
	}
});

var intervalId = setInterval(function () {
	if (videoElement && restTime === 0) {
		clearInterval(intervalId);
		countdownElement.style.display = "none";
		videoElement.parentElement.style.display = "block";
	}
	formatTime(restTime);
	restTime--;
}, 1000);



module.exports = {
	database: database
};