var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('start', function() {
  gulp.src('./')
    .pipe(webserver({
        port: 8080,
        livereload: {},
        directoryListing: true,
        open: true
    }));
});