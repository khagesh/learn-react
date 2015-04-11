/**
 * Created by Khagesh.Sharma on 3/31/2015.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var ext_replace = require('gulp-ext-replace');

gulp.task('default', function () {
    return gulp.src("app/**/*.jsx")
                .pipe(babel())
                .pipe(ext_replace(".js"))
                .pipe(gulp.dest("app"))
});