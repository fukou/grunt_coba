// kalau mau secara otomatis ke-compile dan running task-nya  grunt-concat setiap di-save, pakai grunt-contrib-watch

module.exports = function(grunt) {
    // grunt.registerTask('speak', function() {
    //     console.log("I am speaking");
    // });

    // grunt.registerTask('yell', () => {
    //     console.log("I am yelling");
    // })

    // grunt.registerTask('both', ['speak', 'yell']);
    grunt.initConfig({
        concat: {
        //   dist: {
        //     src: ['js/intro.js', 'js/project.js', 'js/outro.js'],
        //     dest: 'dist/built.js',
        //   },
          // atau kalau mau lebih dari dua
          js: {
            src: ['js/intro.js', 'js/project.js', 'js/outro.js'],
            dest: 'dist/js/scripts.js',
          },
          css: {
            src:['css/reset.css', 'css/variables.css', 'css/main.css'],
            dest:'dist/css/styles.css'
          }
        },
        watch: {
            js: {
              files: ['js/**/*.js'],
              tasks: ['concat'],
            //   options: {
            //     spawn: false,
            //   },
            },
            css: {
                files: ['css/**/*.js'],
                tasks: ['concat'],
              //   options: {
              //     spawn: false,
              //   },
              },
          }
      });

      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');
    
    //   default kalau run grunt langsung run semua skrip di atas
      grunt.registerTask('default', ['concat', 'watch']);

}