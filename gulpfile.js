'use strict';

const fs = require('fs');
const browserify = require('browserify');
const gulp = require('gulp');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('babelify');
const browserSync = require('browser-sync').create();
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));


sass.compiler = require('node-sass');


gulp.task('js', () =>
  browserify({
    entries: './src/js/index.js',
    extensions: ['.js'],
  })
    .transform(babelify, babelrc)
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    //.pipe(uglify()).on('error', e => console.error(e))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/')));


gulp.task('css', () =>
  gulp.src('./src/sass/index.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['./node_modules/bootstrap/scss/']
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream()));


gulp.task('server', ['css', 'js'], () => {
  browserSync.init({
    port: 8443,
    server: "./",
    open: false,
    files: [
      {
        match: ['./src/sass/**', './src/js/**'],
        fn: function(event) {
          if (event === 'add')
            this.reload();
        }
      }
    ]
  });

  gulp.watch(['./src/sass/**/*.sass'], ['css']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch(['./dist/**/*.js', './*.html']).on('change', browserSync.reload);
});
