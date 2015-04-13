/**
 * Created by Khagesh.Sharma on 3/31/2015.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var ext_replace = require('gulp-ext-replace');

// Style dependencies
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

// Setup tasks for styles
gulp.task('styles', function() {
    return gulp.src('app/styles/*.less')
		      .pipe(less())
		      .pipe(prefix({cascade: true}))
		      .pipe(ext_replace(".css"))
		      .pipe(gulp.dest('app/styles'));
});

// Setup tasks for converting  jsx to js
gulp.task('browserify-jsx', function () {
    return gulp.src("app/**/*.jsx")
            	.pipe(babel())
                .pipe(ext_replace(".js"))
                .pipe(gulp.dest("app"))
});

// Watcher task
gulp.task('watch',function() {
   gulp.watch('app/**/*.jsx', ['browserify-jsx']);
   gulp.watch(['app/styles/*.less', 'app/styles/**/*.less'], ['styles']);
});

// Default task
gulp.task('default', ['watch']);