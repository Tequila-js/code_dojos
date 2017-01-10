'use strict';

const argv = require('yargs').argv,
      gulp = require('gulp'),
      sass = require('gulp-sass'),
      gulpIf = require('gulp-if'),
      plumber = require('gulp-plumber'),
      webpack = require('gulp-webpack'),
      webserver = require('gulp-webserver'),
      livereload = require('gulp-livereload'),
      runSequence = require('gulp-run-sequence');

gulp.task('watch-html', function () {
  gulp.src('./dist/index.html')
      .pipe(gulpIf(argv.env === 'dev', livereload()));
});

gulp.task('process-js', function () {
  return gulp.src('app/js/main.js')
            .pipe(plumber())
            .pipe(webpack( require('./webpack.config.js') ))
            .pipe(gulp.dest('./docs'))
            .pipe(gulpIf(argv.env === 'dev', livereload()));
});

gulp.task('process-sass', function () {
  return gulp.src('./app/scss/main.scss')
              .pipe(plumber())
              .pipe(sass({
                style: "nested",
                noCache: true
              }))
              .pipe(gulp.dest('./docs/'))
              .pipe(gulpIf(argv.env === 'dev', livereload()));
});

gulp.task('watch', function () {
  livereload.listen();

  gulp.src('./docs')
    .pipe(webserver({
      livereload: false,
      directoryListing: false,
      open: true
    }));

  gulp.watch(['./dist/index.html'], ['watch-html']);
  gulp.watch(['./app/scss/*.scss', './app/scss/**/*.scss'], ['process-sass']);
  gulp.watch(['./app/js/*.js', './app/js/**/*.js'], ['process-js']);
});
