"use strict";

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('compileSass', function() {
  return gulp.src("assets/css/styles.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watchFiles', function() {
  gulp.watch('assets/css/**/*.scss', ['compileSass']);
})

gulp.task('serve', ['watchFiles'], function() {
  gulp.watch("assets/css/**/*.scss", ['watchFiles']);
});

gulp.task("default", function() {});