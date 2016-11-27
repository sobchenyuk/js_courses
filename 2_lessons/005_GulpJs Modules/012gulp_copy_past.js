var gulp = require('gulp'),
    jscpd = require('gulp-jscpd');

gulp.task('copy-past', function () {
    return gulp.src('./public/js/*.js')
        .pipe(jscpd({
	      'min-lines': 1,
	      'min-tokens': 40,
	      verbose    : true
	}));
});
