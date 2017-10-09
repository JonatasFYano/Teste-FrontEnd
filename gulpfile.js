var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('start', function() {
  gulp.src('./')
    .pipe(webserver({
        port: 8088,
        livereload: {},
        directoryListing: true,
        fallback: 'home.html',
        open: true
    }));
});