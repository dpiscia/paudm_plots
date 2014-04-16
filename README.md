[![Build Status](https://travis-ci.org/dpiscia/paudm_plots.png)](https://travis-ci.org/dpiscia/paudm_plots)

## Paudm_plots application
===========

D3 based PAUDM plots


### Instructions

To install dependencies, run <npm install> (behind the scene it will run also a bower install)

```
npm install 
```


### Run the Application

To start an http server which will serve static file:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.


## Testing

There are two kinds of tests: Unit tests and End to End tests.

### Running Unit Tests

The unit tests are written in `Jasmine` and runs with `Karma`

* the configuration is found at `test/karma.conf.js`
* the unit tests are found in `test/unit/`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if you unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


### End to end testing

The app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `test/protractor-conf.js`
* the end-to-end tests are found in `test/e2e/`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

To ensure that you are going to test the latest changes, you should prepare a distribution of your source

```
npm run distribution
```


Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


To run the server , the distribution ,and the test you have to type:
```
npm run all
```

##Grunt

you can prepare a development enviroment by pressing
````
grunt dev
````

and then go to url 

`http://localhost:8000/dev`

you can prepare a production (source compiled)enviroment by pressing
````
grunt prod
````

and then go to url 

`http://localhost:8000/prod`

you can minizing the source by pressing
````
grunt minify
````

you can prepare a distribution from source (minimy and concatenation)
````
grunt distribution
````
