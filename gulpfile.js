var gulp = require("gulp");
var browserify = require("gulp-browserify");
var rename = require("gulp-rename");
var sass = require("gulp-sass");

var browserSync = require("browser-sync").create();

var config = {
	source: "./src/",
	build: "./dist/"
};

var paths = {
	assets: "assets/**",
	html: "**/*.html",
	sass: "scss/**/*.scss",
	js: "js/**/*.js",
	mainSass: "scss/main.scss",
	mainJS: "js/app.js"
};

var sources = {
	assets: config.source + paths.assets,
	html: config.source + paths.html,
	sass: config.source + paths.sass,
	js: config.source + paths.js,
	rootSass: config.source + paths.mainSass,
	rootJS: config.source + paths.mainJS
};

gulp.task("sass", function() {
    gulp.src(sources.rootSass)
        .pipe(sass({
        	outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(gulp.dest(config.build + "css"));
});

gulp.task("sass-watch", ["sass"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("js", function() {
	gulp.src(sources.rootJS)
		.pipe(browserify())
		.pipe(rename("bundle.js"))
		.pipe(gulp.dest(config.build + "js"));
});

gulp.task("js-watch", ["js"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("html", function() {
	gulp.src(sources.html)
		.pipe(gulp.dest(config.build));
});

gulp.task("html-watch", ["html"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("assets", function() {
	gulp.src(sources.assets)
		.pipe(gulp.dest(config.build + "assets"));
});

gulp.task("assets-watch", ["assets"], function (done) {
    browserSync.reload();
    done();
});

gulp.task("serve", function() {
	browserSync.init({
		server: {
			baseDir: config.build
		}
	});

	gulp.watch(sources.html, ["html-watch"]);
	gulp.watch(sources.sass, ["sass-watch"]);
	gulp.watch(sources.js, ["js-watch"]);
});

gulp.task("dev", ["sass-watch", "js-watch", "html-watch", "assets-watch", "serve"]);