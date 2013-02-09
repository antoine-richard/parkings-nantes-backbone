define([
  'backbone',
  'collections/parkings',
  'views/parking',
  'views/error'
], function(Backbone, parkings, ParkingView, ErrorView) {

  var ParkingsView = Backbone.View.extend({

    el: $("#parkings"),

    initialize: function() {
      parkings.on('reset', this.onReset, this);
      this.fetchData();
    },

    fetchData: function() {
      parkings.fetch()
      .fail(function() {
        new ErrorView().render();
      });
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