/**
 * Created by Khagesh.Sharma on 3/31/2015.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var watch = require('gulp-watch');
// Style dependencies
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var ext_replace = require('gulp-ext-replace');

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

// Setup tasks for styles
gulp.task('styles', function() {
    return gulp.src('app/styles/*.less')
        .pipe(less())
        .pipe(prefix({cascade: true}))
        .pipe(ext_replace(".css"))
        .pipe(gulp.dest('app/styles'));
});

gulp.task('watch', function(){
    watch(["app/**/*.js", "examples/**/*.html", 'app/styles/*.less'], function () {
        gulp.start('clean');
        gulp.start('ES6');
        gulp.start('html');
        gulp.start('styles');
    });
});

gulp.task('default', ['watch', 'clean', 'ES6', 'html']);