 angular.module('paudm_plots_example', ['paudm_plots'])
    .controller('Controller', ['$scope', function($scope) {
      $scope.data = { 'name' : 'title', 
		      'width' : 400, 'height': 400, //px
		      'translate' : [{'x' : 60, 'y': 20}] ,//px
		      'legend' : false, 'data' : [{'name' : 'pixelsim.pixelsim', 'counts': 4}, {'name' : 'nightly.nightly', 'counts': 8}] }
      console.log('ctrl app');
    }])
