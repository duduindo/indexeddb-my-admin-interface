const fs = require('fs');
const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const babelify = require('babelify');
const browserSync = require('browser-sync').create();
const stylus = require('gulp-stylus');
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));


gulp.task('js', () =>
  browserify({
    entries: './src/js/index.js',
    extensions: ['.js'],
  })
    .transform(babelify, babelrc)
    .bundle()
    .pipe(source('common.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    //.pipe(uglify()).on('error', e => console.error(e))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/')));


gulp.task('css', () =>
  gulp.src('./src/stylus/app.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: false,
      paths: ['node_modules'],
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream()));


gulp.task('css:documentation', () =>
  gulp.src('./src/stylus/documentation.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: true,
      paths: ['node_modules'],
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/')));


gulp.task('server', ['css', 'js'], () => {
  browserSync.init({
    port: 3001,
    server: "./",
    open: false,
    files: [
      {
        match: ['./src/stylus/**', './src/js/**'],
        fn: function(event) {
          if (event === 'add')
            this.reload();
        }
      }
    ]
  });

  gulp.watch(['./src/stylus/**/*.styl'], ['css']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch(['./dist/**/*.js', './*.html']).on('change', browserSync.reload);
});
