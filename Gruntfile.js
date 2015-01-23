module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      default: {
        options: {
          preserveComments: 'some',
          sourceMap: 'dist/timekeeper.min.map',
          sourceMappingURL: 'dist/timekeeper.min.map'
        },
        files: {
          'dist/timekeeper.min.js': 'dist/timekeeper.js'
        }
      }
    },
    browserify: {
      main: {
        src: 'index.js',
        dest: 'dist/timekeeper.js',
        options: {
          browserifyOptions: {
            standalone: 'timekeeper'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify', 'uglify']);
};
