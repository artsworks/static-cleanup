var fileHTML = './files/dummy.html';
var fileImg = './files/img';
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
gulp.task('minhtml', function () {
    return gulp.src(fileHTML)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./out'));
});

// minify png
var imagemin = require('gulp-imagemin');
gulp.task('minpng', function () {
    gulp.src(fileImg + '/*.png')
        .pipe(imagemin([imagemin.optipng({optimizationLevel: 7})], {
            verbose: true
        }))
        .pipe(gulp.dest('./out/img'));
});

// minify images
var image = require('gulp-image');
gulp.task('minimg', function () {
    gulp.src(fileImg + '/*.png')
        .pipe(image())
        .pipe(gulp.dest('./out/img'));
});

// convert images to sprite
// var gulpif = require('gulp-if');
var sprity = require('sprity');

gulp.task('sprites', function () {
    return sprity.src({
        src: fileImg + '/*.{png,jpg}',
        style: './sprite.scss',
        processor: 'sass'})
        .pipe(gulp.dest('./out/img/'), gulp.dest('./out/css/'))
});