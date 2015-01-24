module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      default: {
        options: {
          preserveComments: 'some',
          sourceMap: 'dist/datetime-factory.min.map',
          sourceMappingURL: 'dist/datetime-factory.min.map'
        },
        files: {
          'dist/timekeeper.min.js': 'dist/datetime-factory.js'
        }
      }
    },
    browserify: {
      main: {
        src: 'index.js',
        dest: 'dist/datetime-factory.js',
        options: {
          browserifyOptions: {
            standalone: 'datetimeFactory'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify', 'uglify']);
};
