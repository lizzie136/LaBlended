var config = require("./config");

var page = {};
page.get = function(path, callback) {
	if (window.location.pathname.indexOf(path) >= 0) {
		callback();
	}
}

config.menu();

page.get("/", function() {

});

page.get("/login", function() {
	var login = require("./login");
	login.init();
})

page.get("/kick-off", function() {
	var kickoff = require("./kickoff");
});

page.get("/lesson", function() {
	var lesson = require("./lesson");
});

page.get("/editor", function() {
	var editor = require("./editor");
});

page.get("/classroom", function() {
	var lesson = require("./lesson");
});