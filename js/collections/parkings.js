define([
  'backbone',
  'models/parking'
], function(Backbone, Parking) {
	
	var Parkings = Backbone.Collection.extend({

    model: Parking,

    url: 'http://data.nantes.fr/api/getDisponibiliteParkingsPublics/1.0/39W9VSNCSASEOGV/?output=json',

    parse: function(response) {
      return response.opendata.answer.data.Groupes_Parking.Groupe_Parking;
    },

    comparator: function(parking) {
      return -parking.get('Grp_disponible');
    }

  });

  return new Parkings;
});