var gulp = require('gulp');
var concat = require('gulp-concat');
var order = require("gulp-order");
var uglify = require("gulp-uglify");
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('scripts', function() {
  return gulp.src(['./js/**/*.js', '!./js/vendor/*.min.js', '!./js/modules/*.min.js'])
  .pipe(order([
    "main.js",
    "directives/*.js",
    "controllers/*.js",
    "filters/*.js",
    "others/*.js"
  ]))
  .pipe(concat('bundle.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(gulp.dest('./js/'));
});

gulp.task('default', ['scripts']);
