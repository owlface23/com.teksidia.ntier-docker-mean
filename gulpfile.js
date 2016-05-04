var gulp = require('gulp');
var webserver = require('gulp-webserver');
var spawn = require('child_process').spawn;
var bower = require('gulp-bower');
var node;

var paths = {
  nodeSource: ['./Api/server.js',
    './Api/app/**/*.js'
  ],
  nodeStart: './Api/server.js'
};

var server = {
  host: 'localhost',
  port: '8080'
};

gulp.task('bower', function() {
  return bower({
    cwd: './Web/wwwroot'
  });
});

/**
 * $ gulp webclient
 * description: launch the HTML/Angular client
 */
gulp.task('webclient', function() {
  gulp.src('./Web/wwwroot')
    .pipe(webserver({
      host: server.host,
      port: server.port,
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('webApi', function() {
  if (node) node.kill();
  node = spawn('node', [paths.nodeStart], {
    stdio: 'inherit'
  });
  node.on('close', function(code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

/**
 * $ gulp
 * description: start the development environment
 */
gulp.task('default', ['bower', 'webclient', 'webApi'], function() {

  gulp.watch(paths.nodeSource, ['webApi']);

});

// clean up if an error goes unhandled.
process.on('exit', function() {
  if (node) node.kill();
});
