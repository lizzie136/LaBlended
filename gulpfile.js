var gulp = require("gulp");
var browserify = require("gulp-browserify");
var rename = require("gulp-rename");
var sass = require("gulp-sass");

var config = {
	source: "./src",
	build: "./dist"
};

gulp.task("sass", function() {
    gulp.src(config.source + "/scss/**/*.scss")
        .pipe(sass({
        	outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest(config.build + "/css"));
});

gulp.task("js", function() {
	gulp.src(config.source + "/js/app.js")
		.pipe(browserify())
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest(config.build + "/js"));
});