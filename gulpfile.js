'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('watchSass', function() {
	gulp.watch('scss/**/*.scss', ['compileSass']);
});

gulp.task("compileSass",function(){
	gulp.src("scss/application.scss")
		.pipe(sass())
		.pipe(gulp.dest('css'));
})

gulp.task('build',['compileSass']);