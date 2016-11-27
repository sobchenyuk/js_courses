var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename');

gulp.task('css', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/'));
});