'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
	beforeEach(module('paudm_plots'));
	
	var element, scope, d3;
	
	
	beforeEach(inject(function($rootScope, $compile, _d3_) {
		element = angular.element(
			'<paudm-bars api="data" ></paudm-bars> '); 
 		d3 = _d3_;
		scope = $rootScope;
 		
		scope.data = { 'name' : 'title', 
		      'width' : 400, 'height': 400, //px
		      'translate' : [{'x' : 60, 'y': 20}] ,//px
		      'legend' : false, 'data' : [{'name' : 'pixelsim.pixelsim', 'counts': 4}, {'name' : 'nightly.nightly', 'counts': 8}] }
 
		$compile(element)(scope);
		scope.$digest();
	}));  	
	
	it("should have the correct amount of bars", function() {
		var list = element.find('rect');
		
		expect(list.length).toBe(2);
	});
	
		it("should have the correct bar height", function() {
		var list = element.find('rect');
		
		expect(list.length).toBe(2);
	});
});
