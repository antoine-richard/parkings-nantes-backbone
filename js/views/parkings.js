define([
  'jquery',
  'underscore',
  'backbone',
  'collections/parkings',
  'views/parking',
], function($, _, Backbone, parkings, ParkingView) {

  var ParkingsView = Backbone.View.extend({

    el: $("#parkings"),

    initialize: function() {
      parkings.on('reset', this.onReset, this);
      parkings.fetch();
    },

    onReset: function() {
      parkings.each(function(parking) {
        var view = new ParkingView({ model: parking, id: parking.get('Grp_identifiant') });
        this.$el.append(view.render().el);
      }, this);
    }

  });

  return ParkingsView;
});