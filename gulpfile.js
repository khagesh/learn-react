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
var themeConfig = require('./theme-config.json')

gulp.task('clean', function () {
   return gulp.src(['dist'], {read: false}).pipe(clean());
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

//  Generate theme specific files
gulp.task('generate-themes', function() {
    
    for (var theme in themeConfig) {

        var targetTemplates = themeConfig[theme];

        targetTemplates.forEach(function(currentTarget){
            gulp.src('app/styles/themes/' + theme + '/_theme.color.less')
                .pipe(gulp.dest('app/styles/templates/' + currentTarget + '/' + theme));

            gulp.src('app/styles/all.less')
                .pipe(gulp.dest('app/styles/templates/' + currentTarget + '/' + theme));
        });  
    };    
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/Verdana.ttf')
      .pipe(gulp.dest('build/fonts'));
});

// Setup tasks for styles
gulp.task('styles', ['generate-themes', 'fonts'], function() {
    return gulp.src(['app/styles/templates/**/**/all.less'])
        .pipe(less())
        .pipe(prefix({cascade: true}))
        .pipe(ext_replace(".css"))
        .pipe(gulp.dest('app/styles/templates'))
        .pipe(gulp.dest("build/styles/templates"));
});

// Watcher task
gulp.task('watch', function(){
    watch(["app/**/*.js", "examples/**/*.html"], function () {
        gulp.start('clean');
        gulp.start('ES6');
        gulp.start('html');
        gulp.start('styles');
    });
});

gulp.task('default', ['watch', 'clean', 'ES6', 'html']);
