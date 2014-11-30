var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat');
   // watch = require('gulp-watch');

gulp.task('html', function () {
    // move all html files and their directories from src/ to app/www
    gulp.src('src/**/*.html').pipe(gulp.dest('app/www/')).pipe(notify("html files moved to app"));
});

gulp.task('css', function () {
    // minify css from app_modules and move to app/www/app_modules
    gulp.src('src/app_modules/**/*.css').pipe(minifyCSS()).pipe(gulp.dest('app/www/app_modules/')).pipe(notify("css files in app_modules minified and moved to app"));
});

gulp.task('sass', function () {
    // create css using sass and place in the css directory
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('src/css/'))
        .pipe(gulp.dest('app/www/css/'))
        .pipe(notify("sass finished!"));
});

gulp.task('lint', function () {
    // check js and report errors
    gulp.src('src/**.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', function () {
    // uglify js files and move to app
    gulp.src('src/bower_components/angular/angular.js').pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('app/www/bower_components/angular/'));
    
    gulp.src('src/bower_components/angular-animate/angular-animate.js').pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('app/www/bower_components/angular-animate/'));
    
    gulp.src('src/bower_components/angular-route/angular-route.js').pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('app/www/bower_components/angular-route/'));
    
    gulp.src('src/bower_components/angular-sanitize/angular-sanitize.js').pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('app/www/bower_components/angular-sanitize/'));
    
    gulp.src('src/bower_components/snapjs/**/*.*').pipe(gulp.dest('app/www/bower_components/snapjs'));
    
    gulp.src('src/fonts/**/*.*').pipe(gulp.dest('app/www/fonts'));

    gulp.src('src/initialize.js').pipe(gulp.dest('app/www'));
    
    gulp.src('src/bower_components/fastclick/lib/fastclick.js').pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('app/www/bower_components/fastclick/lib/'));
    
    gulp.src('src/bower_components/angular-bootstrap/ui-bootstrap.js').pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('app/www/bower_components/angular-bootstrap'));

    gulp.src('src/bower_components/bootstrap/dist/css/bootstrap.css').pipe(minifyCSS({
        mangle: false
    })).pipe(gulp.dest('app/www/bower_components/bootstrap/dist/css'));

    gulp.src('src/bower_components/bootstrap/dist/fonts/*.*')
    .pipe(gulp.dest('app/www/bower_components/bootstrap/dist/fonts'));

    gulp.src('src/app_modules/**/*.js').pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('app/www/app_modules/'));
    
    gulp.src('src/app.js').pipe(uglify({
        mangle: false
    })).pipe(gulp.dest('app/www/')).pipe(notify("js files minified and moved to app"));

});

// gulp.task('watch-sass', function () {
//     // watch when .scss files change, and run task 'sass'
//     gulp.watch(['src/scss/*.scss'], ['sass']);
// });

// gulp.task('watch-js', function () {
//     // watch when .scss files change, and run task 'sass'
//     gulp.watch(['src/**/*.js'], ['lint']);
// });

// default task
gulp.task('default', ['html', 'sass', 'css', 'lint', 'scripts']);