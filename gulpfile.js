var gulp      = require('gulp'),
    concat = require('gulp-concat');

gulp.task('html', function() {
  return gulp.src(['./app/includes/header.html','./app/includes/content.html', './app/includes/footer.html'])
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./app/'));
});