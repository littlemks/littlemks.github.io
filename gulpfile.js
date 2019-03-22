var gulp   = require('gulp'),
    uglify = require('gulp-uglify-es').default,
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    connect   = require('gulp-connect');

gulp.task('scripts', function(){
  gulp.src('assets-dev/js/*.js')
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('assets'))
      .pipe(connect.reload());
});

gulp.task('styles', function(){
  gulp.src('assets-dev/main.sass')
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('assets/'))
      .pipe(connect.reload());
});


gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function(){
  gulp.watch('assets-dev/*.sass', ['styles']);
  gulp.watch('assets-dev/js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'styles', 'watch', 'connect']);
