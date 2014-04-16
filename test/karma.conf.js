module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'components/angular/angular.js',
      'components/angular-mocks/angular-mocks.js',
      'src/*.js',
      'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome','Firefox','Safari'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-safari-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
