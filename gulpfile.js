'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src('./scripts/**/*.js')
    .pipe(concat('nighttab.js'))
    .pipe(gulp.dest('./dist/scripts/'));
});
