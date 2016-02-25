var path = require('path');

module.exports = function (grunt) {

    grunt.initConfig({


        global: {
            /* project directory structure */
            dir: {
                base: path.resolve(path.resolve()+"/.."),
                working: '<%= global.dir.base %>/working',
                workCSS: '<%= global.dir.working %>/css',
                src: '<%= global.dir.base %>/src',
                build: '<%= global.dir.base %>/build',
                templ: '<%= global.dir.base %>/template',
                dist: '<%= global.dir.base %>/dist',
                distDash: '<%= global.dir.dist %>/dashboard',
                distTempl: '<%= global.dir.dist %>/template',
                lib: '<%= global.dir.src %>/lib',
                test: '<%= global.dir.working %>/test',

            }
        },
        clean: {
            options: {
                force: true
            },

            cleanTest: ["<%= global.dir.test %>"],
            cleanDist: ["<%= global.dir.dist %>"],
            cleanWorkCSS: ["<%= global.dir.workCSS %>"],
            cleanTestCSSEC3: ["<%= global.dir.test %>/css/ec3"],
            cleanDistLibs: ["<%= global.dir.distDash %>/lib/kendoui/**/*.*,",
                "<%= global.dir.distDash %>/lib/kendoui/js/*",
                "!<%= global.dir.distDash %>/lib/kendoui/js/kendo.all.min.js",
                "<%= global.dir.distDash %>/lib/kendoui/styles/*",
                "!<%= global.dir.distDash %>/lib/kendoui/styles/kendo.common.min.css",
                "!<%= global.dir.distDash %>/lib/kendoui/styles/kendo.metroblack.min.css",
                "!<%= global.dir.distDash %>/lib/kendoui/styles/MetroBlack",
                "!<%= global.dir.distDash %>/lib/kendoui/styles/textures"],

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
            },
            toDistDash: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dir.test %>',
                    src: ['**/*.*'],
                    dest: '<%= global.dir.distDash %>'
                }]
            },
            toDistTempl: {
                files: [{
                    expand: true,
                    cwd: '<%= global.dir.templ %>',
                    src: ['**/*.*'],
                    dest: '<%= global.dir.distTempl %>'
                }]
            },
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
    grunt.registerTask('to-dist', ['clean:cleanDist','to-test-all','copy:toDistDash','clean:cleanDistLibs','copy:toDistTempl']);


    /** plugin load*/
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');



};