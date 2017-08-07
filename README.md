git clone https://github.com/andresnaranjo/apirest.git
git remote add origin https://github.com/andresnaranjo/apirest.git
git push -u origin master

var gulp  = require('gulp');
var babel = require('gulp-babel');
gulp.task('build:js', function () {
  gulp.src('source/app.js')
    .pipe(babel())
    .pipe(gulp.dest('build/');
});