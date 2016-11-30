var gulp        = require('gulp');
      imagemin     = require('gulp-imagemin');
      cache        = require('gulp-cache');
	  cssmin        = require('gulp-cssmin');
	  autoprefixer = require('gulp-autoprefixer');
	  concatCss = require('gulp-concat-css');
	  pngquant = require('imagemin-pngquant');




  gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // кэширование изображений, прошедших через imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images/'))
});

gulp.task('clear',function(){//чистка кеша
	return cache.clearAll();

});



gulp.task('default', function () {
    return gulp.src('app/images/**/*')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/images/'));
});


 gulp.task('css', function(){
  return gulp.src('./app/css/*')
  
		.pipe(concatCss('master.min.css'))
		
		.pipe(autoprefixer([
		'Chrome >= 20',
		'Firefox >= 24',
		'Explorer >= 8',
		'iOS >= 6',
		'Opera >= 12',
		'Safari >= 6'
		]))
		
  .pipe(cssmin())
  
  .pipe(gulp.dest('./dist/css/'))
  
  
});
