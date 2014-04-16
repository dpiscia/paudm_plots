module.exports = function(grunt) {

  	// Project configuration.
	grunt.initConfig({
		 concat: {
		    options: {
		      separator: ';',
		    },
		    dist: {
		      src: ['src/d3_ang_module.js', 'dest/paudm_d3_bars.min.js'],
		      dest: 'dest/built.js',
		    },
		 },
		env : {
				options : {},
				dev: {
					NODE_ENV : 'DEVELOPMENT'
				},
				prod : {
					NODE_ENV : 'PRODUCTION'	
				}
		},
		preprocess : {
			options : {},
			dev : {
				
				src : './src/tmpl/index.html',
        		dest : './dev/index.html'
			} ,
			prod : {
			    
			    src :  './src/tmpl/index.html' ,
			    dest  : './prod/index.html'
			   
 		 },
		},
		  jshint: {
		    all: ['Gruntfile.js', 'src/paudm_d3_bars.js']
		  },
		  clean: {
			  dev: ["dest"],
			  prod: ["prod"]
		},

		  uglify: {
		      options: {
      mangle: false
    },
		    prod: {
		      files: {
		        'dest/paudm_d3_bars.min.js': [ 'src/paudm_d3_bars.js']
		      }
		    }
		  }  
	});

  // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task(s).
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dev', ['jshint', 'env:dev', 'clean:dev','concat', 'preprocess:dev']);
  grunt.registerTask('prod', ['jshint', 'env:prod', 'clean:prod','uglify', 'concat','preprocess:prod']);

};
