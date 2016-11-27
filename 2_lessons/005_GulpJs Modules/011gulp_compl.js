var gulp = require('gulp'),
    complexity = require('gulp-complexity');

gulp.task('complexity', function () {
    return gulp.src('./public/js/*.js')
        .pipe(complexity());
});
