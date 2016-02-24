var path = require('path');

module.exports = function (grunt) {

    grunt.initConfig({


        global: {
            /* release version common to all js projects */
            versionForce :"0.13.0-SNAPSHOT.0" ,
            /* project directory structure */
            dir: {
                /** base directory of project (absolute path) **/
                base: path.resolve(path.resolve()+"/.."),
                /** working directory */
                working: '<%= global.dir.base %>/working',
                /** css working directory */
                workCSS: '<%= global.dir.working %>/css',
                /** main  path */
                src: '<%= global.dir.base %>/src',
                /** build scripts  path */
                build: '<%= global.dir.base %>/build',
                /** dist directory */
                dist: '<%= global.dir.base %>/dist',
                /**  lib dependencies path */
                lib: '<%= global.dir.src %>/lib',
               /** compile working directory */
                test: '<%= global.dir.working %>/test',

            }
        },
        clean: {
            options: {
                force: true
            },

            /**** clean registration  ****/
            cleanTest: ["<%= global.dir.test %>"],
            /**** clean dist  ****/
            cleanDist: ["<%= global.dir.dist %>"],
            /**** clean dist  ****/
            cleanWorkCSS: ["<%= global.dir.workCSS %>"],
            /**** clean dist  ****/
            cleanTestCSSEC3: ["<%= global.dir.test %>/css/ec3"],

         },
        copy: {
            srcMinimal: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dir.src %>',
                    src: ['**/*.*', '!css/**/*.*', '!lib/**/*.*'],
                    dest: '<%= global.dir.test %>'
                }]
            },
            cssMinimal: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dir.src %>',
                    src: ['css/wa/**/*.*','css/wa/*.*'],
                    dest: '<%= global.dir.test %>'
                }]
            },
            libToTest: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dir.src %>',
                    src: ['lib/**/*.*'],
                    dest: '<%= global.dir.test %>'
                }]
            }
        },
        cssmin: {
            ec3: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dir.src %>/css/ec3',
                    src: [ '*.css','**/*.css'],
                    dest: '<%= global.dir.workCSS %>/ec3',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            ec3: {
                src: ['<%= global.dir.workCSS %>/ec3/*.min.css', '<%= global.dir.workCSS %>/ec3/**/*.min.css'],
                dest: '<%= global.dir.test %>/css/ec3/ec3.min.css'
            }
        }

    });

    grunt.registerTask('to-test-css-ec3', ['clean:cleanWorkCSS','clean:cleanTestCSSEC3','cssmin:ec3','concat:ec3']);
    grunt.registerTask('to-test-src', ['copy:srcMinimal',"copy:cssMinimal"]);
    grunt.registerTask('to-test-all', ['clean:cleanTest','copy:libToTest','to-test-src',"to-test-css-ec3"]);

    /** plugin load*/
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');



};