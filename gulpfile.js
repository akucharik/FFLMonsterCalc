'use strict';

var browserify = require('browserify');
var del = require('del');
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');

var build = {
    dest:  './build',
    scripts: {
        dest: './build/scripts',
        destName: 'test.js',
        source: './src/javascript/game.js',
        sourceName: 'game.js',
    },
    styles: {
        dest: './build/styles',
        destName: 'test.css',
        source: './src/styles'
    }
};

gulp.task('build', ['scripts', 'styles'], function () {
    
});

gulp.task('clean', function () {
    return del(build.dest);
});

gulp.task('scripts', ['clean'], function () {
    return browserify(build.scripts.source)
        .bundle()
        .pipe(source(build.scripts.sourceName))
        .pipe(rename(build.scripts.destName))
        .pipe(gulp.dest(build.scripts.dest));
});

gulp.task('styles', ['clean'], function () {
    return gulp.src(build.styles.source)
        .pipe(less())
        .pipe(rename(build.styles.destName))
        .pipe(gulp.dest(build.styles.dest));
});

// set up default task
gulp.task('default', ['build']);