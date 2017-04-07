var quiz = require("../quiz").quiz
var questions = require("../quiz/questions").questions;

var materials = document.getElementsByClassName("material");
console.log(materials);
var showMaterial = function (e) {
	e.preventDefault();
	var materialType = this.getAttribute("data-material-type");
	switch(materialType) {
		case "video": 
			showVideo(this);
			break;
		case "challenge":
			showChallenge(this);
			break;
		case "quiz":
			showQuiz(this);
			break;
		default: 
			console.log("implementig...");
	};
};

var addContent = function (content) {
	var container = document.getElementById("content");
	container.innerHTML = "";
	container.appendChild(content);
};

var showVideo = function (element) {
	var wistiaToken = element.getAttribute("data-token");
	var videoContainer = document.createElement("div");
	videoContainer.className = "wistia_embed wistia_async_" + wistiaToken  +" videoFoam=true";

	videoContainer.style.height = "700px";
	videoContainer.style.width = "400px";
	console.log;
	addContent(videoContainer);
};

var showChallenge = function (element) {
	console.log("challenge");
	var iFrame = document.createElement("iframe");
	var embedExercise = element.getAttribute("data-embed");
	var replItUrl = "https://repl.it/student_embed/assignment/20771/" + embedExercise;
	iFrame.setAttribute("frameborder", "0");
	iFrame.setAttribute("width", "100%");
	iFrame.setAttribute("height", "600px");
	iFrame.setAttribute("src", replItUrl);
	addContent(iFrame);
	iFrame.onloadeddata = addListenerToSubmitReplIt;
};

var showQuiz = function (element){
	console.log("quiz");
	var id = parseInt(element.getAttribute("data-id"));
	if(id == 0){
		quiz('quiz-1', questions.slice(0, 4));
	}else if(id==1){
		quiz('quiz-2', questions.slice(4));
	}
}

var addListenerToSubmitReplIt = function () {
	var root = document.getElementById("root");
	console.log(root);
};

[].forEach.call(materials, function (material) {
	material.addEventListener("click", showMaterial);
});


var btnSlack = document.getElementById("slack-btn");
if(btnSlack) btnSlack.addEventListener("click", function(e){
	window.open(e.target.getAttribute("data-url"), "_blank");
})


var quizBtn = document.getElementById("quiz-btn");
if(quizBtn) quizBtn.addEventListener("click", function(e){
	window.open(e.target.getAttribute("data-url"), "_blank");
})
