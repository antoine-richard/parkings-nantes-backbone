require.config({
  paths: {
    jquery: 	'libs/jquery/1.8.3/jquery.min',
    underscore: 'libs/lodash/1.0.0-rc.1/lodash.min',
    backbone: 	'libs/backbone/0.9.2-amdjs/backbone.min',
    text: 		'libs/require/plugins/text/2.0.3/text.min'
  }
});	

require(['views/parkings'], function(ParkingsView){
  new ParkingsView;
});
