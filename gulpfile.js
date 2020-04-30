const gulp = require('gulp');
const sass = require('gulp-sass');

function style() {

  return gulp.src('./src/scss/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
}

function watch() {
  gulp.watch('./src/scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
