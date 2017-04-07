require("codemirror/mode/javascript/javascript");
require("codemirror/mode/css/css");
require("codemirror/mode/htmlmixed/htmlmixed");

var CodeMirror = require("codemirror");
var GlotApi = require("glot-api");
var glot = new GlotApi("ac6de232-f987-44e7-8919-df10bc74b985");

var textArea = document.getElementById("text-editor");
var sendCode = document.getElementById("send-code");

var editor = CodeMirror.fromTextArea(textArea, {
  mode: "application/javascript",
  lineWrapping: true,
  extraKeys: {
    "Ctrl-Space": "autocomplete"
  },
  lineNumbers: true,
  theme: "material"
});

sendCode.addEventListener("click", function () {
	var code = editor.getValue();
	glot.run("javascript", [{
		"name": "main.js",
		"content": "var num1 = 20; var num2 = 30; console.log(num1 + num2);"
	}]).then(function (res) {
		console.log("res " + res);
	});
});