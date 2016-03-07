var gulp = require('gulp'),
  del = require('del'),
  $ = require('gulp-load-plugins')();

gulp.task('connect', function() {
  $.connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('app/*.html')
    .pipe($.connect.reload());
});

gulp.task('lint', function () {
  gulp.src('app/js/**/*.js')
    .pipe($.jscs())
    .pipe($.jscs.reporter())
    .pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.connect.reload());
});

// gulp.task('sass', function () {
//   return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
//
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

gulp.task('watch', function () {
  gulp.watch(['app/*.html'], ['html']);
  gulp.watch(['app/js/**/*.js'], ['lint']);
});

gulp.task('default', ['connect', 'lint', 'watch']);
