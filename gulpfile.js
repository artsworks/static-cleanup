var fileHTML = './files/dummy.html';
var gulp = require('gulp');

// remove unused css
var uncss = require('gulp-uncss');
gulp.task('uncss', function () {
    return gulp.src('./files/target.css')
        .pipe(uncss({
            html: [fileHTML]
        }))
        .pipe(gulp.dest('./out'));
});

// minify css
var cleanCSS = require('gulp-clean-css');
gulp.task('mincss', function () {
    return gulp.src('./out/target.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./out'));
});

// minify html
var htmlmin = require('gulp-htmlmin');
gulp.task('minhtml', function() {
    return gulp.src(fileHTML)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./out'));
});