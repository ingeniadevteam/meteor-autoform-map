Package.describe({
  summary: 'Edit location coordinates with autoForm',
  version: '0.0.1',
  git: 'https://github.com/yogiben/meteor-autoform-map'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
  	'coffeescript',
  	'templating',
  	'aldeed:autoform@4.0.7',
  	'mrt:googlemaps@0.0.2'
  ], 'client');

  api.addFiles([
  	'lib/client/autoform-map.html',
  	'lib/client/autoform-map.coffee'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('autoform-map');
  api.addFiles('autoform-map-tests.js');
});
