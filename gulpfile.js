var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

const paths = { sass: ['./sass/**/*.scss'], css: 'assets/css/' };

gulp.task('sass', function(done) {
    gulp.src(paths.sass)
        .pipe(sass()
        .on('error', sass.logError))
        .pipe(concatCss("styles.css"))
        .pipe(gulp.dest(paths.css))
        .on('end', done)
});

gulp.task('watch',function() {
    gulp.watch(paths.sass, gulp.series('sass'));
});