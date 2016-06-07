var gulp = require('gulp'),
    argv = require('yargs').argv,
    server = require('./server');


gulp.task('http-prod-server', function () {
    var port = argv.port || 80;
    server.listen(port);
});