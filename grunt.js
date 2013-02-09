module.exports = function (grunt) {

  grunt.initConfig({

    clean: {
      build: ['build']
    },

/*
    sass: {
      dist: {
        files: {
          'test.css': 'test.scss'
        }
      }
    },*/

    requirejs: {
      std: {
        options: {
          almond: true,
          replaceRequireScript: [{
            files: ['build/index.html'],
            module: 'main'/*,
            modulePath: 'js/main-build'*/
          }],
          modules: [{name: 'main'}],
          dir: 'build',
          appDir: 'src',
          baseUrl: 'js',
          paths: {
            jquery:     'libs/jquery/1.8.3/jquery',
            underscore: 'libs/lodash/1.0.0-rc.1/lodash',
            backbone:   'libs/backbone/0.9.9-amdjs/backbone',
            text:       'libs/require/plugins/text/2.0.5/text'
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask('reset', ['clean']);
  grunt.registerTask('default', ['clean', 'requirejs']);
  
};