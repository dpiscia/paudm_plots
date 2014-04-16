
'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('paudm plots - bars', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/index.html");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('should render view1 when user navigates to /view1', function() {
    	
      expect(element.all(by.tagName('rect')).count()).
        toMatch(2);
    });

  });

});