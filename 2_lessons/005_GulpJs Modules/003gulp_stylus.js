var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	cssmin = require('gulp-cssmin'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename');

gulp.task('styl', function() {
    return gulp.src('./public/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(concatCss('styl.css'))
        .pipe(gulp.dest('./public/css/'));

});

gulp.task('css', function () {
    return gulp.src('./public/css/*.css')
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./public/build/'));
});