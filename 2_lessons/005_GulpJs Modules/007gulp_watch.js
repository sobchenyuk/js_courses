var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
	rename = require('gulp-rename');

gulp.task('image', function () {
    return gulp.src('public/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/images/'));
});

gulp.task('js', function () {
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('styl', function() {
    return gulp.src('./public/styl/*.styl')
        .pipe(stylus({
            linenos: false
        }))
        .pipe(autoprefixer([
            'Android 2.3',
            'Android >= 4',
            'Chrome >= 20',
            'Firefox >= 24',
            'Explorer >= 8',
            'iOS >= 6',
            'Opera >= 12',
            'Safari >= 6'
        ]))
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


gulp.task('watch', function() {
    gulp.watch("./public/styl/*.styl", ['styl']);
    gulp.watch("./public/css/*.css", ['css']);
    gulp.watch("./public/js/*.js", ['js']);
});