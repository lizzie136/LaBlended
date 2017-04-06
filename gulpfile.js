var gulp = require("gulp");
var sass = require("gulp-sass");

var config = {
	source: "./src",
	build: "./dist",
	buildCss: "main.css"
};

gulp.task("sass", function() {
    gulp.src(config.source + "/scss/**/*.scss")
        .pipe(sass({
        	outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest(config.build + "/css"));
});