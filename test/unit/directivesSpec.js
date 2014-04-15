'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('paudm_plots'));

  describe('app-version', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.data({ 'name' : 'title', 
		      'width' : 400, 'height': 400, //px
		      'translate' : [{'x' : 60, 'y': 20}] ,//px
		      'legend' : false, 'data' : [{'name' : 'pixelsim.pixelsim', 'counts': 4}, {'name' : 'nightly.nightly', 'counts': 8}] });
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<paudm-bars api="data" ></paudm-bars>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
