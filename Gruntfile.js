module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: port,
          base: '/web',
          livereload: true
          /* open: {
            target: 'http://localhost:' + port + '/index.html'
          }, */
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        cwd: '/web'
      },
      js: {
        files: [ '**/*.js', '**/*.css' ]
      },
      html: {
        files: [ '**/*.html']
      }
    }

  });

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );

  grunt.registerTask( 'serve', [ 'connect', 'watch' ] );
};

