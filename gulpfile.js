var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

gulp.task('concat-app-js', function(){
    return gulp.src(['./client/**/*.js', './client/app.module.js'])
        .pipe(concat('app-files.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('concat-bundle-js', function(){
    return gulp.src(['./node_modules/angular/*.min.js', './node_modules/angular-ui-router/release/*.min.js'])
        .pipe(concat('app-bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js', function(){
    return gulp.src('index.html')
        .pipe(inject(gulp.src(
            ['./dist/*.js'], 
            {read: false}), {addRootSlash: false, ignorePath: '/dist'})
        )
        .pipe(gulp.dest('./dist'));
});

gulp.task('develop-sequence', function(done) {
    runSequence('concat-bundle-js', 'concat-app-js', function() {
        gulp.start('js');
        done();
    });
});


gulp.task('build', ['develop-sequence']);