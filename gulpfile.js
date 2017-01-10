'use strict';

var argv = require('yargs').argv;

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      gulpIf = require('gulp-if'),
      webserver = require('gulp-webserver'),
      livereload = require('gulp-livereload');

gulp.task('open-dev-server', function () {
  gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('watch-html', function () {
  gulp.src('./dist/index.html')
      .pipe(gulpIf(argv.env === 'dev', livereload()));
});

gulp.task('process-sass', function () {
  return gulp.src('./app/scss/main.scss')
              .pipe(sass({
                style: "nested",
                noCache: true
              }))
              .pipe(gulp.dest('./dist/'))
              .pipe(gulpIf(argv.env === 'dev', livereload()));
});

gulp.task('watch', function () {
  livereload.listen();

  gulp.watch(['./dist/index.html'], ['process-html']);
  gulp.watch(['./app/scss/*.scss', './app/scss/**/*.scss'], ['watch-sass']);
});
