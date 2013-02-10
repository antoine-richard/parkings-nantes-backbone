module.exports = function (grunt) {

  grunt.initConfig({

    clean: {
      dist: ['dist']
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
          mainConfigFile: 'src/js/main.js',
          almond: true,
          replaceRequireScript: [{
            files: ['dist/index.html'],
            module: 'main'/*,
            modulePath: 'js/main'*/
          }],
          modules: [{name: 'main'}],
          dir: 'dist',
          appDir: 'src',
          baseUrl: 'js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean'); // 0.3.1
  //grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask('reset', ['clean']);
  grunt.registerTask('default', ['clean', 'requirejs']);
  
};