var gulp = require('gulp'),
    complexity = require('gulp-complexity');

gulp.task('autopolyfiller', function () {
    return gulp.src('./public/js/*.js')
        .pipe(autopolyfiller('result_polyfill_file.js'))
        .pipe(gulp.dest('./dist'));
});
