var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBpHfxeWPUVgKpKLxTHip0cvZ_sT0s8BwA",
    authDomain: "lablended.firebaseio.com",
    databaseURL: "https://lablended.firebaseio.com",
    storageBucket: "lablended.appspot.com",
    messagingSenderId: "",
};

firebase.initializeApp(config);

var database = firebase.database();

var menuInit = function(){
    var coderName = document.getElementById("coder-name");
    if(coderName) coderName.appendChild(document.createTextNode(localStorage.getItem("name")));
}

module.exports = {
	firebase: {
		database: database
	}, 
    menu : menuInit,
};