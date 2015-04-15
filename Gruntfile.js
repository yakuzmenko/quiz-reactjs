module.exports = function(grunt) {
	grunt.initConfig({

		react: {
			jsx: {
				files: [
					{
						expand: true,
						cwd: 'js/src',
						src: [ '**/*.jsx' ],
						dest: 'js/prod',
						ext: '.js'
					}
				]
			}
		},

		browserify: {
			main: {
				src: 'js/prod/**/*.js',
				dest: 'js/main.js'
			}
		},

		uglify: {
			my_target: {
				files: {
					'js/main.min.js': ['js/main.js']
				}
			}
		}

		//watch: {
		//	react: {
		//		files: 'public/js/**/*.jsx',
		//		tasks: ['react']
		//	}
		//}
	});

	//grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['react', 'browserify', 'uglify']);
};