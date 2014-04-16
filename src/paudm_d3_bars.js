(function () {
   'use strict';
   // this function is strict...
}());

/* Directives */


var paudm_d3_plots = angular.module('paudm_plots', ['d3']);


angular.module('paudm_plots').directive('paudmBars', function() {
  return {
    restrict: 'E',
    controller: 'paudm_bars_ctrl',

    scope: {
      api: '=',
    },
    link: function(scope, element, attrs, paudm_bars_ctrl) {
      paudm_bars_ctrl.init( element );
    }
  };
});


angular.module('paudm_plots ')
	.controller('paudm_bars_ctrl', function($scope, $attrs, d3){
		var self = this;
	  	console.log('ctrl dir');
	  	this.init = function( element ) {
	    		console.log('init directiv ctrl');
	    		self.$element = element;
	    		$scope.api = angular.isDefined($attrs.api) ? $scope.$parent.$eval($attrs.api) : false;
	    		self.svg = d3.select(element[0])
				.append("svg")
				.attr("width", $scope.api.width )
				.attr("height",$scope.api.height).
				append("g")
				.attr("transform", "translate($scope.api.translate.x ,$scope.api.translate.y )");
			
	  	};
		
		this.render = function(){
				//remove elements from prevois screens
				self.svg.selectAll("g").remove();
				self.svg.selectAll(".bar").remove();
				self.svg.selectAll("text").remove();

				//select all bars
				var bars = self.svg.selectAll(".bar")
					.data($scope.api.data);



				//define color mapping
				var color = d3.scale.category20(); 

      					var x = d3.scale.ordinal()
						.rangeRoundBands([0, ($scope.api.width/$scope.api.data.length) ], 0.1 , 0.5);
					var y = d3.scale.linear()
				    	.range([400, 0]);

					x.domain($scope.api.data.map(function(d) { return d.name; }));
 					y.domain([0, d3.max($scope.api.data, function(d) { return d.counts; })]);

      				bars.exit().remove();  

//				height is set to zero to enable animaiton effects
				bars.enter().append("rect")
					.attr("class", "bar")
					.attr("x", function(d) { return x(d.name); })
					.attr("width", x.rangeBand())
					.attr("y", $scope.api.height)
					.attr("height", 0)
					.style("fill", function(d) { 
						return color(d.name);
        			});
      				self.svg.select("g.x.axis").selectAll("text").remove();
				bars.transition()
					.delay(function(d, i) { return i * 50; })
					.attr("y", function(d) { return y(d.counts); })
					.attr("height", function(d) { return $scope.api.height; });
				};
	  	 this.api = function() {
			    return $scope.api;
			  };
		$scope.$watch(
			'api', 
			function(){
				return self.render();
				}, true);

		
}
);
