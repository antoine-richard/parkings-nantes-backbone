require.config({
  paths: {
    jquery: 	'libs/jquery/1.8.3/jquery',
    underscore: 'libs/lodash/1.0.0-rc.1/lodash',
    backbone: 	'libs/backbone/0.9.9-amdjs/backbone',
    text: 		'libs/require/plugins/text/2.0.5/text'
  }
});	

require(['views/parkings'], function(ParkingsView){
  new ParkingsView;
});
