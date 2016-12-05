var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    cssmin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    pngquant = require('imagemin-pngquant'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch'),
    rename = require('gulp-rename'),
    uncss = require('gulp-uncss'),
    jade = require('gulp-jade'),
    htmlhint = require("gulp-htmlhint"),
    browserSync = require("browser-sync"),
    plumber = require('gulp-plumber'),
    rev = require('gulp-rev'),
    sourcemaps = require('gulp-sourcemaps');


// Работа с STYLUS
gulp.task('styl', function () {
    return gulp.src('./app/styl/*.styl')

        .pipe(plumber())

        .pipe(sourcemaps.init())

        .pipe(stylus({
                linenos: false
            }).on('error', function (error) {
                console.log(error);
            })
        )
        
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

        .pipe(uncss({
            html: ['index.html', 'app/**/*.html']
        }))

        .pipe(concatCss('stylus.css'))


        .pipe(sourcemaps.write())

        
        .pipe(gulp.dest('./app/stylusStyle/'))
        
        .pipe(browserSync.reload({stream: true}))
    
});


// Работа с CSS
gulp.task('css', function () {
    
        return gulp.src('./app/stylusStyle/*.css', { ignoreInitial: false })
            
            
            

            .pipe(concatCss('master.css'))
            
            /*.pipe(rename({
                suffix: '.min'
            }))

            .pipe(cssmin())*/ //раскоментировать
            
            
            .pipe(gulp.dest('./app/css/'))
            
            .pipe(browserSync.reload({stream: true}))

});



// Работа с JADE
gulp.task('jade', function () {
    gulp.src('./app/jade/*.jade')
        .pipe(plumber())

        .pipe(jade({pretty: true}).on('error', function (error) {
                console.log(error);
            })
        )
        .pipe(gulp.dest('./app/'))
        
        .pipe(browserSync.reload({stream:true}))
    
});


// Работа с ФОТО ужимает
gulp.task('img', function () {
    return gulp.src('./app/images/**/*')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        
        .pipe(gulp.dest('./dist/images/'));
});


// Валидная html
gulp.task('html', function () {
    return gulp.src("./app/*.html", { ignoreInitial: false })

        .pipe(plumber())

        .pipe(htmlhint().on('error', function (error) {
                console.log(error);
            })
        )
        .pipe(htmlhint.reporter("htmlhint-stylish").on('error', function (error) {
            console.log(error);
        }))
        .pipe(htmlhint.failReporter({suppress: true}))
        
        .pipe(browserSync.reload({stream: true}))

});


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: './app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


// Следит за изминениями
gulp.task('watch',['browser-sync','jade'], function () {

    gulp.watch("./app/jade/**/*.jade",['jade']);

    gulp.watch("./app/styl/**/*.styl",['styl']);

    gulp.watch("./app/stylusStyle/**/*.css",['css']);

    gulp.watch("./app/*.html",['html']);

});













gulp.task('images', function () {
    return gulp.src('./app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // кэширование изображений, прошедших через imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('./dist/images/'))
});

gulp.task('clear', function () {//чистка кеша
    return cache.clearAll();

});

gulp.task('csss', function () {
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