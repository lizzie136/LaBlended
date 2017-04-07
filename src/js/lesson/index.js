var materials = document.getElementsByClassName("material");

var showMaterial = function (e) {
	var materialType = this.getAttribute("data-material-type");
	switch(materialType) {
		case "video": 
			showVideo(this);
			break;
		case "challenge":
			showChallenge(this);
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
	videoContainer.style.height = "100%";
	videoContainer.style.width = "100%";
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

var addListenerToSubmitReplIt = function () {
	var root = document.getElementById("root");
	console.log(root);
};

[].forEach.call(materials, function (material) {
	material.addEventListener("click", showMaterial);
});

