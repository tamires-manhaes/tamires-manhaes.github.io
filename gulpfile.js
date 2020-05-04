'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', watch);
gulp.task('sass', compileSass);

function compileSass(){
    return gulp
        .src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css/'));
}

function watch(){
    gulp.watch('scss/**/*.scss', compileSass);
}
