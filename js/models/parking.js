define([
  'backbone'
], function(Backbone) {

  var Parking = Backbone.Model.extend({

  	defaults: {
  		subscriberOnly: function() {
  			return this.Grp_statut == 2;
  		},
        almostFull: function() {
            return +this.Grp_disponible <= +this.Grp_complet;
        }
    }

  });

  return Parking;
});