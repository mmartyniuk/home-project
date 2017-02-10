var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('concat-app-js', function(){
    return gulp.src(['./client/**/*.module.js', './client/**/*.js'])
        .pipe(concat('app-files.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('concat-bundle-js', function(){
    return gulp.src(['./node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './node_modules/angular-aria/angular-aria.min.js',
        './node_modules/angular-animate/angular-animate.min.js',
        './node_modules/angular-material/angular-material.min.js',
        './node_modules/chart.js/dist/Chart.min.js',
        './node_modules/angular-chart.js/dist/angular-chart.min.js'
        ])
        .pipe(concat('app-bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('concat-bundle-css', function(){
    return gulp.src(['./node_modules/angular-material/*.min.css'])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('inject', function(){
    return gulp.src('index.html')
        .pipe(inject(gulp.src(
            ['./dist/*.js'],
            {read: false}), {addRootSlash: false, ignorePath: '/dist'})
        )
        .pipe(inject(gulp.src(
            ['./dist/*.css'],
            {read: false}), {addRootSlash: false, ignorePath: '/dist'})
        )
        .pipe(gulp.dest('./dist'));
});


gulp.task('develop-sequence', function(done) {
    runSequence('concat-bundle-js', 'concat-app-js', 'concat-bundle-css', function() {
        gulp.start('inject');
        done();
    });
});


gulp.task('build', ['develop-sequence', 'nodemon'], function() {
    browserSync.init(null, {
        files: ["client/**/*.*"],
        proxy: "http://localhost:5000",
        port: 7000,
	     });
    gulp.watch("./client/**/*.js", ['develop-sequence']);
    //gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('nodemon', function (cb) {
    var started = false;
    return nodemon({
    	 script: 'index.js'
    }).on('start', function () {
    	if (!started) {
    		cb();
    		started = true;
    	}
    });
});
