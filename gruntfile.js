module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
      separator: ';',
    },
      js: {
        src: ['js/src/*.js'],
        dest: 'js/build/script.main.js',
    },

      css: {
        src: ['css/src/*.css'],
        dest: 'css/build/style.main.css',
      },
  },
    uglify: {
      my_target: {
        files: {
          'js/build/script.main.min.js': ['js/build/script.main.js']
      }
    }
  },
    cssmin: {
      target: {
        files: {
          'css/build/style.main.min.css': ['css/build/style.main.css']
    }
  }
}

});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};