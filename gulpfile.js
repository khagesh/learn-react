/**
 * Created by Khagesh.Sharma on 3/31/2015.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var watch = require('gulp-watch');

gulp.task('clean', function () {
   return gulp.src('dist', {read: false}).pipe(clean());
});

gulp.task('ES6', ['clean'], function () {
    return gulp.src("app/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('html', function () {
   return gulp.src("examples/**/*.html")
            .pipe(gulp.dest("build"));
});

gulp.task('watch', function(){
    watch(["app/**/*.js", "examples/**/*.html"], function () {
        gulp.start('clean');
        gulp.start('ES6');
        gulp.start('html');
    });
});

gulp.task('default', ['watch', 'clean', 'ES6', 'html']);