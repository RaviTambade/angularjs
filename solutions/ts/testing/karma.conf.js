module.exports = function(config) {
    config.set({
      frameworks: ['jasmine', 'karma-typescript'],  // Use Jasmine and TypeScript for testing
      files: [
        'src/**/*.ts',                      // Include all TypeScript files
        'node_modules/angular/angular.js',    // Include AngularJS
        'node_modules/angular-mocks/angular-mocks.js'  // Include AngularJS mocks
      ],
      preprocessors: {
        '**/*.ts': ['karma-typescript']  // Preprocess TypeScript files
      },
      browsers: ['Chrome'],                // Run tests in Chrome browser
      reporters: ['progress', 'karma-typescript'],  // Show test progress and TypeScript coverage
      singleRun: false,                    // Run tests continuously
      autoWatch: true,                     // Watch for changes in files and rerun tests
      logLevel: config.LOG_INFO,           // Log level for Karma
      client: {
        jasmine: {
          random: false  // Optional: Disable random test order for reproducibility
        }
      }
    });
  };
  