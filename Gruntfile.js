module.exports = function(grunt) {

  	// Project configuration.
	grunt.initConfig({
		 concat: {
		    options: {
		      separator: ';',
		    },
		    dist_min: {
		      src: ['src/d3_ang_module.min.js', 'src/paudm_d3_bars.min.js'],
		      dest: 'dist/paudm_plots.min.js',
		    },
		    dist: {
		      src: ['src/d3_ang_module.js', 'dist/paudm_d3_bars.js'],
		      dest: 'dist/paudm_plots.js',
		    }
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
			  prod: ["prod"],
			  dev: ["dev"]
		},

		  uglify: {
		      options: {
      mangle: false
    },
		    prod: {
		      files: {
		        'src/paudm_d3_bars.min.js': [ 'src/paudm_d3_bars.js'],
		        'src/d3_ang_module.min.js': [ 'src/d3_ang_module.js'],
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
  grunt.registerTask('dev', ['jshint', 'env:dev',  'clean:dev', 'concat:dist', 'preprocess:dev']);
  grunt.registerTask('prod', ['jshint', 'env:prod', 'clean:prod','uglify', 'concat:dist_min','preprocess:prod']);
  grunt.registerTask('minify', ['uglify']);
  grunt.registerTask('distribution', ['uglify', 'concat:dist_min']);
};
