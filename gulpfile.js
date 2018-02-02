/* File: gulpfile.js */

// Init Gulp packages
var gulp  = require('gulp'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost:8080'
    });
});

// Compile Sass
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

// Minify and rename css
gulp.task('minify-css', ['sass'], function() {
  return gulp.src(['./*.css', '!./*.min.css', '!./rtl.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'));
});

// Live reload
gulp.task('live-reload', ['minify-css'], function(done) {
    browserSync.reload();
    done();
});

// Create a default chained task
gulp.task('default', ['sass', 'minify-css', 'browser-sync'], function() {
    gulp.watch(['./sass/**/*.scss', './*.css', './**/*.php', './js/*.js'], ['sass', 'minify-css', 'live-reload']);
});